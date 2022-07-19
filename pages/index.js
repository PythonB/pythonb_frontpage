import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LinkedInLogo from "../public/images/LI-Logo.png"

const Index = () => {
	return (
		<div id="main-view">
            <Head>
                <title>Python_B's personal page</title>
            </Head>
            <div id="fullmenu-view">
                <h1>
                    Python_B's personal page
                </h1>
                <div id="buttons">
                        <Link href="/article/about">
                            <div><button>About me</button><br className="mobile-only"/></div>
                        </Link>
                        <Link href="/article/projects">
                            <div><button>My projects</button><br className="mobile-only"/></div>
                        </Link>
                        <Link href="/article/skills">
                            <div><button>My skills</button></div>
                        </Link>
                </div>
                <div id="footer">
                    <Link href="https://www.linkedin.com/in/bogdan-kolendovskyy-586ab5186/"><Image src={LinkedInLogo} height="34pt" width="138pt"/></Link>
                </div>
            </div>
        </div>
	)
}
export default Index;
