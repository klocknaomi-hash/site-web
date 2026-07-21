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
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      padding: '140px 24px 80px',
    }}>
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto' 
      }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '48px' 
        }}>
          <p style={{
            color: '#7225E3',
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            fontWeight: 600,
          }}>
            Contact
          </p>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 800,
            color: '#111827',
            lineHeight: 1.2,
            marginBottom: '16px',
            fontFamily: 'var(--font-outfit)',
          }}>
            Une question ? Écrivez-nous.
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: 1.6,
          }}>
            On répond en moins de 24h ouvrées.
          </p>
        </div>

        {sent ? (
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '18px',
              color: '#15803D',
              fontWeight: 600,
              marginBottom: '8px',
            }}>
              ✓ Message envoyé !
            </p>
            <p style={{
              color: '#6B7280',
              fontSize: '14px',
            }}>
              Nous vous répondrons rapidement.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '8px',
              }}>
                Nom complet
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({
                  ...form, name: e.target.value
                })}
                placeholder="Votre nom"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#111827',
                  outline: 'none',
                  background: '#FAFAFA',
                  transition: 'border-color 0.2s',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '8px',
              }}>
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({
                  ...form, email: e.target.value
                })}
                placeholder="votre@email.com"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#111827',
                  outline: 'none',
                  background: '#FAFAFA',
                  transition: 'border-color 0.2s',
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '8px',
              }}>
                Sujet
              </label>
              <select
                value={form.subject}
                onChange={e => setForm({
                  ...form, subject: e.target.value
                })}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#111827',
                  background: '#FAFAFA',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
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
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '8px',
              }}>
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={e => setForm({
                  ...form, message: e.target.value
                })}
                placeholder="Comment pouvons-nous vous aider ?"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#111827',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'inherit',
                  background: '#FAFAFA',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #8A38F5 0%, #7225E3 100%)',
                color: 'white',
                padding: '16px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 700,
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
                marginTop: '8px',
                boxShadow: '0 4px 14px rgba(114, 37, 227, 0.25)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              {loading ? 'Envoi...' : 'Envoyer le message →'}
            </button>

            <p style={{
              fontSize: '12px',
              color: '#9CA3AF',
              textAlign: 'center',
            }}>
              Vos données sont utilisées uniquement pour vous répondre.
            </p>
          </form>
        )}

        <div style={{
          marginTop: '64px',
          paddingTop: '32px',
          borderTop: '1px solid #F3F4F6',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '14px',
            color: '#9CA3AF',
            marginBottom: '8px',
          }}>
            Ou écrivez-nous directement à
          </p>
          <a
            href="mailto:contact@creatabl-ia.com"
            style={{
              color: '#7225E3',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            contact@creatabl-ia.com
          </a>
        </div>
      </div>
    </div>
  )
}
