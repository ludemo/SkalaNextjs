import Image from 'next/image'
export default function Footer(){
    return (
        <div className="footer footer--index">
            <div className="footer__logo" href="../index.html">
                <a href="/">
                    <Image 
                        width ={473}
                        height={89}
                        src='/img/SkalaLetras.webp'
                        className="footer__logo-img" 
                        alt="skala-logo"
                        />
                </a>
            </div>
            <h3 className="footer__texto">CONTÁCTANOS</h3>
            <div className ="footer__redes">
            {/*Facebook*/} 
                <div className="red">
                    <a className="red__enlace" href="https://www.facebook.com/studioskala">
                    {/* <img loading="lazy" className="red__icono" src="img/Facebook.webp" alt="facebook"> */}
                    <p className="red__texto">/StudioSkala</p>
                    </a>
                </div>
                {/*Instagram*/}
                <div className="red">
                    <a className="red__enlace" href="https://www.instagram.com/skalastudio_arquitectura/">
                    {/* <img loading="lazy" className="red__icono" src="img/Instagram.webp" alt="instagram">   */}
                    <p className="red__texto">/SkalaStudio</p>
                    </a>
                </div>
                {/* WhatsApp */}
                <div className="red" >
                <a className="red__enlace" href="https://wa.link/f2iyke">
                {/*   <img loading="lazy" className="red__icono" src="img/whatsapp-logo.webp" alt="whatsapp"/> */}
                    <p className="red__texto">942 732 102</p>
                </a>
                </div>
            </div>
        </div>
    )
}