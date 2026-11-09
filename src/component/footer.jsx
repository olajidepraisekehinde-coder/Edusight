function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-10 text-center">

                <p>&copy; {year} <span className="text-[#8193BD] font-bold">EDUSIGHT.</span> Computing Excellence, all rights reserved.</p> 
       
        </footer>
    )

}

export default Footer