import React from 'react'
import { connect } from 'react-redux'
import { search, post_article } from '../../../actions'
import ArticleCard from './ArticleCard'

// The component for the layout of the whole followers area
const Article =({articles_shown, search, post_article}) => {
        
        const handlePost = () => {
            let newArticleBody = document.getElementById("newpost").value;
            post_article(newArticleBody);
            document.getElementById("newpost").value = '';
        }

        const handleCancel = () => {
            document.getElementById("newpost").value = '';
        }

        const handleSearch = () => {
            let keyword = document.getElementById("search").value;
            search(keyword);
        }

        return (
		    <div>
                <div class="border p-3 mb-3 shadow-lg bg-light">
                    <div class="form-group">
                        <textarea class='form-control' placeholder="Your post here" id="newpost"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="file" />	
                    </div>
                    <div class="form-group">
                        <input class="btn btn-outline-primary mr-3" type="button"  value="cancel" onClick={handleCancel}/>
                        <input class="btn btn-outline-primary" type="button" value="post" onClick={handlePost}/>
                    </div>  
                </div>
                <div class="border p-3 mb-3 shadow-lg bg-light">
                    <input class="form-control" type="text" placeholder="keywords" id="search"/>
                    <input class="btn btn-outline-primary btn-block" type="button" value="search" onClick={handleSearch}/>                
                </div>
                {articles_shown.sort((a, b) => b.timestamp - a.timestamp).map((article, key) => (
                    <ArticleCard key={key}
                        body={article.body} img={article.img} timestamp={article.timestamp} author={article.author}/>
                    )
                )}
            </div>
        )
    }


    const mapStateToProps = (state) => {
        return {
            articles_shown: state.articles_shown
        }
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            search: (keyword) => dispatch(search(keyword)),
            post_article: (newArticleBody) => dispatch(post_article(newArticleBody))
        }
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Article);