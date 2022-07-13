import PropTypes from 'prop-types'
const Logo=({title,logo})=>{
    return(
        <div className='flex items-center'>
            <img src={logo} alt={title}  className="mr-3 h-6"/>
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>{title}</span>
        </div>

    )
    
}
Logo.propTypes={
    title:PropTypes.string,
    logo: PropTypes.string
}
Logo.defaultProps={
    title:"Corona App",
    logo:"https://cdn.pixabay.com/photo/2020/02/12/04/19/coronavirus-4841637_1280.png"
}
export default Logo