import React, {useEffect, useState} from 'react';
import CardOutput from './CardOutput';
import styled from 'styled-components';
import MockArticle from '../../Images/Search-output-page/Desktop-version/Data-Scientist-image.png';

const ListOfDocuments = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        margin-top: 75px;
`;

const H3 = styled.h3`
        font-family: Ferry;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 2%;
        color: rgba(0, 0, 0, 1);
`;

const Documents = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-top: 30px;
        overflow-x: auto;
`;

const ShowInSource = styled.button`
        width: 305px;
        height: 59px;
        border-radius: 5px;
        border: none;
        background-color: rgba(89, 112, 255, 1);
        font-family: Inter;
        font-weight: 500;
        font-size: 22px;
        line-height: 26.63px;
        letter-spacing: 4%;
        color: rgba(255, 255, 255, 1);
        align-self: center;
        margin-top: 38px;
         &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;



function ListOfDocs({documentsData}) {

  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(2);

  useEffect(() => {
    if (documentsData && Array.isArray(documentsData)) {
      const transformedArticles = documentsData.map(doc => {
        const {issueDate, url, source, attributes, title, content} = doc.ok;
        const {name} = source;
        const {isTechNews, isAnnouncement, isDigest, wordCount} = attributes;
        return {
          date: new Date(issueDate).toLocaleDateString("ru-RU"),
          url,
          sourceName: name,
          isTechNews,
          isAnnouncement,
          isDigest,
          title: title.text,
          content: content.markup,
          wordCount,
          picture: MockArticle, 
        };
      });

      setArticles(transformedArticles);
    }
  }, [documentsData]);


 
  const showMoreArticles = () => {
    setDisplayedArticles(prev => prev + 2);
  };

 
  return (
    <ListOfDocuments>
                <H3>Список документов</H3>
                <Documents>
                {articles
          .slice(0, displayedArticles) 
          .map((article, index) => (
            <CardOutput key={index} {...article} />
          ))}
                </Documents>
                {displayedArticles < articles.length && (
                <ShowInSource onClick={showMoreArticles}>Показать больше</ShowInSource>
              )}
    </ListOfDocuments> 
  )           
}

export default ListOfDocs;