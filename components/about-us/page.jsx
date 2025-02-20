'use client'
export default function AboutUs() {
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('Contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center  '>
            <img src='/img/about/1.png' alt='Morocco Falcon Club' className='lg:w-[50vw] lg:h-[50vw] w-full h-full bg-cover' title="Morocco Falcon Club" />
            <div className="container py-10 px-6 font-satoshi">
                <h2 className="text-4xl font-black  text-gray-900 mb-6">À Propos de <span className="text-redPrimary">Morocco Falcon Club</span></h2>
                <p className=" text-gray-700 mb-8 ">
                    Le <strong>Morocco Falcon Club</strong> est une communauté dédiée aux passionnés de la <strong>fauconnerie au Maroc</strong>. 
                    Ancré dans une tradition ancestrale, notre club rassemble amateurs et experts pour préserver, promouvoir 
                    et célébrer l&apos;art noble de l&apos;élevage et du dressage des faucons.
                </p>
                <div className="flex flex-col gap-8">
                    <div>
                        <h3 className="text-xl text-redPrimary font-bold uppercase mb-4">Notre Mission</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Préserver et transmettre l&apos;héritage culturel de la fauconnerie marocaine.</li>
                            <li>Offrir un espace d&apos;échange et de formation pour les passionnés.</li>
                            <li>Organiser des événements, compétitions et séances d&apos;entraînement exclusives.</li>
                            <li>Sensibiliser à la protection et au bien-être des rapaces.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-redPrimary uppercase mb-4">Nos Activités</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>Événements & Rencontres</strong> : Compétitions, démonstrations et sorties en plein air.</li>
                            <li><strong>Formations & Ateliers</strong> : Apprentissage des techniques de dressage et des soins aux faucons.</li>
                            <li><strong>Échanges & Communauté</strong> : Un réseau de passionnés partageant leur expérience.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-10 w-full flex items-start">
                    <button  onClick={handleScrollToContact} className="px-6 py-3 bg-redPrimary text-white font-bold rounded-lg shadow-md hover:bg-[#fff] hover:text-redPrimary  border-2 border-redPrimary  duration-700 transition">
                        Rejoignez-nous dès maintenant 🦅
                    </button>
                </div>
            </div>
        </div>
    )
}