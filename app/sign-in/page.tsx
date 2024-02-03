import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { animate, px } from 'framer-motion'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()

  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }

  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center" style={{
      backgroundImage: `url('https://i.imgur.com/HyKdfEY.png')`,
      backgroundSize: 'cover', // Fill the background
      backgroundPosition: 'center',
      flexWrap: 'wrap'
    }}>


      <div>
        <p id="quote" style={{ fontSize: '35px', color: 'black' }}>
          <b>
            <center>
              “Education is the greatest wealth a man can possess.” <br /> - Mansa Musa
            </center>
          </b>
        </p>
      </div>

      <div style={{ width: '100%' }}></div>

      <div>
        <LoginButton />
      </div>

    </div>
  )
}
