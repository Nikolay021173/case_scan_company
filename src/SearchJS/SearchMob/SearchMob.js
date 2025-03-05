import React, {useState, useEffect} from 'react';
import {ReactComponent as DocumentLogo} from '../../Images/Search-page/Mobile-version/DocumentLogoMob.svg';
import styled from 'styled-components';
import correctOfEnterInn from '../SearchUtil/correctOfEnterInn';
import {useSearch} from "../SearchUtil/useSearch";

const Div = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start;     
`;

const ContainerForSearchParamMob = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start; 
`;

const AnnotationAndImage = styled.div`
        width: 335px;
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-top: -7px;
        margin-left: 14px;
`;

const AnnotationMob = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        
`;

const ContainerVektorImage = styled.div`
        margin-top: 70px;
        align-self: center;
`;

const H2 = styled.h2`
    font-family: Ferry;
    font-weight: 900;
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: 1%; 
    color: rgba(0, 0, 0, 1);
`;

const Span = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 0%;
    color: rgba(0, 0, 0, 1);
`;

const ContainerFormSearchMob = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        width: 375;
        height: 688;
        padding: 24px 21px 37px 14px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);  
        margin-top: 21px;
`;

const Label = styled.label`
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 21.78px;
        letter-spacing: 2%;
        color: rgba(0, 0, 0, 1);
        
`;/*margin-top: 30px;*/

const InpText = styled.input`
    width: 335px;
    height: 43px;
    border-radius: 5px;
    border: 1px solid rgba(199, 199, 199, 1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    &::placeholder{color: rgba(148, 148, 148, 0.5);
                    font-family: Inter;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16.94px;
                    letter-spacing: 2%;
                    text-align: center;
                 };
    margin-top: 20px;
`;

const Select = styled.select`
        width: 335px;
        height: 43px;
        border-radius: 5px;
        border: 1px solid rgba(199, 199, 199, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
        margin-top: 20px;
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 2%;
        padding-left: 22px;
`;

const InpData = styled.input`
    width: 335px;
    height: 43px;
    border-radius: 5px;
    border: 1px solid rgba(199, 199, 199, 1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    margin-top: 20px;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 2%;
    padding-left: 22px;
`;

const Sup = styled.sup`
    font-family: Inter;
    font-weight: 400;
    font-size: 25px;
    line-height: 30.26px;
    letter-spacing: 2%;
    color: rgba(0, 0, 0, 1);
`;

const Button = styled.button`
    width: 335px;
    height: 59px;
    border: none;
    border-radius: 5px;
    background-color: rgba(89, 112, 255, 0.5);
    font-family: Inter;
    font-weight: 500;
    font-size: 20px;
    line-height: 24.2px;
    letter-spacing: 2%;
    color: rgba(255, 255, 255, 1);
    margin-top: 30px;
     &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;

const Note = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 2%;
    color: rgba(148, 148, 148, 1);
    margin-top: 10px;
`;

const ContainerImageMob = styled.div`
        margin-left: 36px;
        margin-top: 24px;
        margin-bottom: 25px;
`;

const SpanError = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 1%;
    color: rgba(255, 89, 89, 1);
    margin-top: 3px;
`;

function SearchMob() {  
    /*const navigate = useNavigate();
        
          const handleLoginClick = () => {
            navigate(`/search/1`);
          }; */

/*****************************ввод ИНН Компании с проверкой ввода***************************** */
      const { innCompany,
        setInnCompany,
        tonality,
        setTonality,
        numbOfDoc,
        setNumbOfDoc,
        startingDate,
        setStartingDate,
        endDate,
        setEndDate,
        formValid,
        navigate,} = useSearch();

      const [error, setError] = useState('');

      const handleSearch = async (event) => {
        event.preventDefault();

        let apiTonality;
    switch (tonality) {
      case 'Любая':
        apiTonality = 'any';
        break;
      case 'Позитивная':
        apiTonality = 'positive';
        break;
      case 'Негативная':
        apiTonality = 'negative';
        break;
      default:
        apiTonality = 'any';
    }
    if (formValid) {
        const searchParams = {
            issueDateInterval: {
                startDate: `${startingDate}T00:00:00+03:00`,
                endDate: `${endDate}T23:59:59+03:00`,
              },
        searchContext: {
        targetSearchEntitiesContext: {
        targetSearchEntities: [{ type: "company", inn: innCompany }],
        tonality: apiTonality,
      },
    },
    limit: Number(numbOfDoc),
    sortType: "sourceInfluence",
    sortDirectionType: "desc",
    intervalType: "month",
    histogramTypes: ["totalDocuments", "riskFactors"],
  };
    navigate(`/search/1`, { state: { searchParams } });
} else {
  console.log('Форма не валидна.');
  };
}

const [varColorStar, setVarColorStar] = useState('rgba(0, 0, 0, 1)');
const [varColorInput, setVarColorInput] = useState('rgba(199, 199, 199, 1)');
const [varBorderColorInput, setVarBorderColorInput] = useState('rgba(199, 199, 199, 1)');
const [hiddenError, setHiddenError] = useState('none');

  useEffect(() => {
    const errorMessage = correctOfEnterInn(innCompany);
    setError(errorMessage);
  }, [innCompany]);
/****************************************************************** */ 
/********Ввод кол-ва запрашиваемых документов с проверкой ввода*** */


const validateDocNumber = () => {
  const num = Number(numbOfDoc);

  if (!numbOfDoc) {
    setError("Обязательное поле");
  } else if (isNaN(num) || num < 1 || num > 1000) {
    setError("Введите корректные данные");
  } else {
    setError("");
  }
};

useEffect(() => {
  validateDocNumber();
});

/****************************************************************** */  
/********Ввод дапазона поиска документов (начальной даты и конечной даты*** */
const [inputTypeStart, setInputTypeStart] = useState('text');
const [inputTypeEnd, setInputTypeEnd] = useState('text');

useEffect(() => {
validateDateRange();
});

const validateDateRange = () => {
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

if (!startingDate || !endDate) {
  setError("Обязательное поле");
} else if (new Date(startingDate) > new Date(endDate)) {
  setError("Введите корректные данные");
} else if (new Date(startingDate) > currentDate || new Date(endDate) > currentDate) {
  setError("Дата не может быть позже текущей даты");
} else {
  setError("");
}   
}

    return <Div>
        <ContainerForSearchParamMob>
            <AnnotationAndImage>
            <AnnotationMob>
                    <H2>
                        Найдите необходимые<br/> данные в пару кликов.
                    </H2>
                    <Span>
                        Задайте параметры поиска.<br/> 
                        Чем больше заполните, тем<br/> точнее поиск
                    </Span>
            </AnnotationMob>    
            <ContainerVektorImage>
                    <DocumentLogo />
            </ContainerVektorImage>
            </AnnotationAndImage>
        </ContainerForSearchParamMob> 
                <ContainerFormSearchMob onSubmit={handleSearch}>

                        <Label htmlFor="innCompany">ИНН компании
                            <Sup style={{color : varColorStar}}>*</Sup></Label>
                        <InpText type='text' id='innCompany' name='innCompany' value={innCompany} 
                        style={{borderColor  : varBorderColorInput, color  : varColorInput}}                      
                          onChange={(e) => { setInnCompany(e.target.value); }}                           
                          onBlur={() => {
                            setVarColorStar(error ? 'rgba(255, 89, 89, 1)' : 'rgba(0, 0, 0, 1)');
                            setVarColorInput(error ? 'rgba(255, 89, 89, 1)' : 'rgba(199, 199, 199, 1)');
                            setVarBorderColorInput(error ? 'rgba(255, 89, 89, 1)' : 'rgba(199, 199, 199, 1)');
                            setError(correctOfEnterInn(innCompany));
                            setHiddenError(error ? 'inline' : 'none');
                          }
                        }
                          placeholder="10 цифр" />
                          {error && <SpanError style={{display: hiddenError}}>{error}</SpanError>}

                        <Label htmlFor="tonality" style={{marginTop: '30px'}}>Тональность</Label>
                        <Select  id="tonality" name="tonality" value={tonality}
                                  onChange={(e) => setTonality(e.target.value)} >
                            <option>Позитивная</option>
                            <option>Негативная</option>
                            <option selected>Любая</option>
                        </Select>


                        <Label htmlFor="docNumber" style={{marginTop: '30px'}}>Количество документов в выдаче
                            <Sup style={{color : varColorStar}}>*</Sup></Label>
                        <InpText type='text' id='docNumber' name='docNumber' value={numbOfDoc} 
                        onChange={(e) => {const newValue = e.target.value;
                            setNumbOfDoc(newValue);
                                          setError();  
                        }}
                        onBlur={() => validateDocNumber()}
                         placeholder="От 1 до 1000" />
                         {error && <SpanError style={{display: hiddenError}}>{error}</SpanError>}

                        <Label htmlFor="startDate" style={{marginTop: '30px'}}>Диапазон поиска
                            <Sup style={{color : varColorStar}}>*</Sup></Label>
                        <InpData  style={{ textAlign: 'center', borderColor  : varBorderColorInput, 
                            color  : varColorInput }} type={inputTypeStart}
                            onFocus={() => setInputTypeStart('date')}
                            onBlur={() => {
                              validateDateRange();
                              if (!startingDate) setInputTypeStart('text');
                            }}
                            id="startDate"
                            name="startDate"
                            placeholder="Дата начала"
                            value={startingDate}
                            onChange={(e) => setStartingDate(e.target.value)}/>
                            
                       
                        <InpData style={{textAlign: 'center', borderColor  : varBorderColorInput, 
                            color  : varColorInput}} type={inputTypeEnd}
                            onFocus={() => setInputTypeEnd('date')}
                            onBlur={() => {
                              validateDateRange();
                              if (!endDate) setInputTypeEnd('text');
                            }}
                            id="endDate"
                            name="endDate"
                            placeholder="Дата конца"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)} />
                            {error && <SpanError style={{display: hiddenError}}>{error}</SpanError>}
                           
                      

                        <Button type="submit" disabled={!formValid}>Поиск</Button>
                        <Note><sup>*</sup>Обязательные к заполнению поля</Note>                  
                </ContainerFormSearchMob>
                <ContainerImageMob><img 
                src={require("../../Images/Search-page/Mobile-version/logo-search-mob.png")} 
                alt="Логотип поиск"></img></ContainerImageMob>
    </Div>;
}

export default SearchMob;