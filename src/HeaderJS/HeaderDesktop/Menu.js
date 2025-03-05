import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


function Menu({pathInPage1, pathInPage2, pathInPage3}) {

 const Ul = styled.ul`
        margin-top: 38px;
        margin-bottom: 38px;
        list-style-type: none;
        list-style-position: outside;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 236px;
        height: 17px;
    `;

    const Href = styled.a`
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
        letter-spacing: 0.01em;
        text-align: left;
        text-underline-position: from-font;
        text-decoration: none; 
        color: rgba(0, 0, 0, 1); 
        &:hover {
          color: rgba(0, 0, 0, 0.3); 
        }
    `;
   const navigate = useNavigate();

   const handleRefMainClick = () => {
    navigate(pathInPage1);
  };
  const handleRefTariffClick = () => {
    navigate(pathInPage2);
  };
  const handleRefFAQClick = () => {
    navigate(pathInPage3);
  };
    return <Ul> 
        <li><Href href={''} onClick={handleRefMainClick}>Главная</Href></li>
        <li><Href href={''} onClick={handleRefTariffClick}>Тарифы</Href></li>
        <li><Href href={''} onClick={handleRefFAQClick}>FAQ</Href></li>
    </Ul>
};

export default Menu;