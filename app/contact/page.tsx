'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm({
          name: '',
          email: '',
          subject: 'general',
          message: '',
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white py-20 px-6 pt-32">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-purple-600 text-xs tracking-widest uppercase mb-3 font-medium">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Une question ? Écrivez-nous.
          </h1>
          <p className="text-gray-600 text-lg">
            On répond en moins de 24h ouvrées.
          </p>
        </div>

        {sent ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <p className="text-green-700 text-lg font-semibold mb-2">
              ✓ Message envoyé !
            </p>
            <p className="text-gray-600">
              Nous vous répondrons rapidement.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({
                  ...form, name: e.target.value
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-gray-900"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({
                  ...form, email: e.target.value
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-gray-900"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <select
                value={form.subject}
                onChange={e => setForm({
                  ...form, subject: e.target.value
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-gray-900 bg-white">
                <option value="general">
                  Question générale
                </option>
                <option value="support">
                  Support technique
                </option>
                <option value="billing">
                  Facturation
                </option>
                <option value="partnership">
                  Partenariat
                </option>
                <option value="feedback">
                  Feedback
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={e => setForm({
                  ...form, message: e.target.value
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-gray-900 resize-none"
                placeholder="Comment pouvons-nous vous aider ?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
              {loading ? 'Envoi...' : 'Envoyer le message →'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Vos données sont utilisées uniquement pour vous répondre. Voir notre <a href="/confidentialite" className="text-purple-600 hover:underline">politique de confidentialité</a>.
            </p>

          </form>
        )}

        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Ou écrivez-nous directement à
          </p>
          <a href="mailto:contact@creatabl-ia.com" className="text-purple-600 font-medium hover:underline">
            contact@creatabl-ia.com
          </a>
        </div>

      </div>
    </div>
  )
}
