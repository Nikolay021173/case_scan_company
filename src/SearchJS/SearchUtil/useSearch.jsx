import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from '../../AuthorizationJS/AuthorUtil/AuthorCont';

export const useSearch = () => {
    const [innCompany, setInnCompany] = useState('');
    const [tonality, setTonality] = useState('');
    const [numbOfDoc , setNumbOfDoc] = useState('');
    const [startingDate, setStartingDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [addRequesPoints, setAddRequesPoints] = useState({
        signOfMaxcompl: false,
        mentInBusinessContext: false,
        mainRoleInPublication: false,
        publicWithRiskFactors: false,
        IncludeTechNewsOfMarkets: true,
        IncludeAnnouncAndCalendars: true,
        IncludeNewsSummaries: true,
    });

    const { loggedIn } = useAccount();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
          navigate('/loginPage/1');
        }
      }, [loggedIn, navigate]);

      const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const valid = innCompany && numbOfDoc && startingDate && endDate;
    setFormValid(valid);
  }, [ innCompany, numbOfDoc, startingDate, endDate, addRequesPoints]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAddRequesPoints(prevState => ({
      ...prevState, [name]: checked,
    })
    );
    };

    return {
        innCompany,
        setInnCompany,
        tonality,
        setTonality,
        numbOfDoc,
        setNumbOfDoc,
        startingDate,
        setStartingDate,
        endDate,
        setEndDate,
        addRequesPoints,
        setAddRequesPoints,
        handleCheckboxChange,
        formValid,
        navigate,
      };
}