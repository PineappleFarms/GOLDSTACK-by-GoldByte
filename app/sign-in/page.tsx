import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { animate, px } from 'framer-motion'
import { redirect } from 'next/navigation'
// import anime from 'animejs';

const quotes = [
  "Gold will not be scarce, and anyone who possesses it will be no more noble than the one who possesses dirt.",
  "Knowledge is wealth; ignorance is poverty.",
  "Learning is an ornament to wealth, but poverty without it is shameful.",
];


export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }

  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center " style={{
      backgroundImage: `url('https://i.imgur.com/or5KQbE.jpeg')`,
      backgroundSize: 'cover', // Fill the background
      backgroundPosition: 'center',
      flexWrap: 'wrap',
    }}>


      <div>
        <p id="quote" style={{ fontSize: '35px', color: 'white' }}>
          “Education is the greatest wealth a man can possess.” - Mansa Musa
        </p>
      </div>
      
      <div style={{width: '100%'}}>

      </div>
      <div>
        <LoginButton />
      </div>
      



    </div>
  )
}
