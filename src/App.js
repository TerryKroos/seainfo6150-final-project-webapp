import React,{useEffect, useState} from  "react";
import { isEmpty } from "lodash";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import About from "./About/About.jsx";
import Subscribe from "./SubscribePage/Subscribe.jsx";
import SportNewsPage from "./SportNewsPage/SportNewsPage.jsx";
import Article from "./Article/Article.jsx";
import PrivacyPage from "./PrivacyPage/PrivacyPage.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Form from "./Form/Form.jsx";


// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
  const [fetchedData, setFetchedData] = useState({});
  const [fetchedSoccerData, setSoccerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch(
        "https://terrykroos.mockable.io/"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);
  
  useEffect(() => {
    const fetchSoccerData = async () => {
      // performs a GET request
      const response = await fetch(
        "https://demo2455048.mockable.io/"
      );
      const responseJson = await response.json();
      setSoccerData(responseJson);
    };

    if (isEmpty(fetchedSoccerData)) {
      fetchSoccerData();
    }
  }, [fetchedSoccerData]);

  return (
    isEmpty(fetchedData || fetchedSoccerData) ? null :
    <>
      
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
      <Route
          path="/"
          exact
          render={() => <Home articles={Object.values(fetchedData)} />}
        /> />
        <Route
          path="/article"
          exact
          render={() => <Article articles={Object.values(fetchedData)} />}
        /> />
          <Route
          path="/nba"
          exact
          render={() => <SportNewsPage articles={Object.values(fetchedSoccerData).splice(9,18)} />}
        /> />
        <Route
          path="/soccer"
          exact
          render={() => <SportNewsPage articles={Object.values(fetchedSoccerData).splice(0,9)} />}
        /> />
        <Route
          path="/nhl"
          exact
          render={() => <SportNewsPage articles={Object.values(fetchedData)} />}
        /> />
        <Route
          path="/nfl"
          exact
          render={() => <SportNewsPage articles={Object.values(fetchedSoccerData).splice(9,18)} />}
        /> />
        <Route
          path="/mbl"
          exact
          render={() => <SportNewsPage articles={Object.values(fetchedSoccerData).splice(9,18)} />}
        /> />

        <Route path="/foo" exact component={Foo} />
        <Route path="/about" exact component={About} />
        <Route path="/subscribe" exact component={Subscribe} />           
        <Route path="/form" exact component={Form} />   
        <Route path="/privacy" exact component={PrivacyPage} />   
        
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
