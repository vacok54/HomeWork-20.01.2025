import FooterLogo from './FooterLogo'
import FooterMenu from './FooterMenu'
import Copyright from './Copyright'
function Footer(){
    return(
        <div className="Footer">
            <FooterLogo/>
            <FooterMenu/>
            <Copyright/>
        </div>
    )
}
export default Footer