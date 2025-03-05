import styled from 'styled-components';


function MenuMob() {

 const Ul = styled.ul`
        width: 65px;
        height: 109px;
        list-style-type: none;
        list-style-position: outside;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 116px;
    `;

    const Href = styled.a`
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        letter-spacing: 0.01em;
        text-align: left;
        text-underline-position: from-font;
        text-decoration: none;
        color: rgba(255, 255, 255, 1);
        &:hover {
                cursor: pointer;
                color: rgba(0, 0, 0, 0.3);
            }
    `;

    const Li = styled.li`
        margin-top: 26px;
    `;
   
    return <Ul> 
        <Li><Href href={require('../..')}>Главная</Href></Li>
        <Li><Href href={require('../..')}>Тарифы</Href></Li>
        <Li><Href href={require('../..')}>FAQ</Href></Li>
    </Ul>
};

export default MenuMob;