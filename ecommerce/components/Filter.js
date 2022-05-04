import React, {useState, useEffect} from 'react'
import filterSearch from '../utils/filterSearch'
import {useRouter} from 'next/router'
import Link from  'next/link'

const Filter = ({site}) => {
    // const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')


    const router = useRouter()



    const handleSearch = (e) => {
        e.preventDefault()
        filterSearch({router, search: search ? search.toLowerCase() : 'all'})
        router.push(`/shop?search=${search}`)
    }

    return (
        <>
        
        <div className="col-lg-2 col-md-2 col-12">
            {/* Logo */}
            <div className="logo" style={{marginTop: "-8px"}}>
            <Link href="/"><img src={site.images[0].url} alt="#" style={{ width: "100%", height: "80px"}}/></Link>
            </div>
            {/* End Logo */}
            {/* Search Form */}
            <div className="search-top">
            <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
            {/* Search Form */}
            <div className="search-top">
                <form className="search-form"  autoComplete="off">
                    <input type="text" placeholder="Search Products here..." autoComplete="off" name="search" className='w-100'
                    value={search.toLowerCase()} onChange={e => setSearch(e.target.value)}  />
                    <button value="search" type="submit" onClick={handleSearch}><i className="ti-search"></i></button>
                </form>
            </div>
            {/* End Search Form */}
            </div> 
            {/* End Search Form */}
            <div className="mobile-nav"></div>
        </div>
        <div className="col-lg-8 col-md-7 col-12">
            <div className="search-bar-top">
                <div className="search-bar">
                    <form autoComplete="off">
                        <input placeholder="Search Products Here....." type="text" autoComplete="off"
                        name="search" value={search.toLowerCase()} onChange={e => setSearch(e.target.value)} 
                        style={{width: "480px"}}
                        />
                        <button className="btnn" type='submit' onClick={handleSearch}><i className="ti-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        </>

        
    )
}


export default Filter
