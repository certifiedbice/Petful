import React, {Component} from 'react';
import Context from '../../context/petfulcontext';
// import ArticleApiService from '../../services/article-api-service'
// import { Section } from '../../components/Utils/Utils'
// import ArticleListItem from '../../components/ArticleListItem/ArticleListItem'

export default class LandingPage extends Component {
	static contextType=Context;

	componentDidMount() {
		this.context.clearError()
		// ArticleApiService.getArticles()
		//   .then(this.context.setArticleList)
		//   .catch(this.context.setError)
	}

  	renderPage(){
		// const { articleList = [] } = this.context
		// return articleList.map(article =>
		//   <ArticleListItem
		//     key={article.id}
		//     article={article}
		//   />
		// )
 	}

	render(){
		const {error}=this.context;
		return(
			<section className='landing-page'>
				{error
					? <p className='red'>There was an error, try again</p>
					: this.renderPage()
				}
			</section>
		);
	}
}