export default  function Footer(){
    return (
        <footer>
             <div>
                <p className={`  p-10 flex flex-col lg:flex-row items-center justify-center gap-1 text-center  font-satoshi font-medium`}>
                    Copyright &copy; {new Date().getFullYear()}<span className="text-redPrimary font-bold uppercase">Morocco Falcon Club</span> . Touts les droits sont réservés
                </p>
             </div>
        </footer>
    )
}