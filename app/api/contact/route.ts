import { Resend } from 'resend'

const subjectLabels: Record<string, string> = {
  general: 'Question générale',
  support: 'Support technique',
  billing: 'Facturation',
  partnership: 'Partenariat',
  feedback: 'Feedback',
}

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: 'contact@creatabl-ia.com',
      replyTo: email,
      subject: `[Creatabl Contact] ${subjectLabels[subject] || 'Message'} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
          <h2>Nouveau message depuis le site</h2>
          <p><strong>De :</strong> ${name} (${email})</p>
          <p><strong>Sujet :</strong> ${subjectLabels[subject] || subject}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return Response.json(
      { error: 'Erreur envoi' },
      { status: 500 }
    )
  }
}
