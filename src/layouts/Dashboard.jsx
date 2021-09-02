import React from 'react'
import { Route } from 'react-router-dom'
import PostAdd from '../pages/post/PostAdd'
import PostUpdate from "../pages/post/PostUpdate"
import PostDetail from '../pages/post/PostDetail'
import PostList from '../pages/post/PostList'
import PostListByCategory from '../pages/post/PostListByCategory'
import Login from '../pages/Login'
import PostListByUser from '../pages/post/PostListByUser'
import CategoryAdd from '../pages/category/CategoryAdd'
import CategoryUpdate from '../pages/category/CategoryUpdate'
import CategoryCrud from '../pages/category/CategoryCrud'
import PostCrud from '../pages/post/PostCrud'
import ImageAdd from '../pages/post/ImageAdd'

export default function Dashboard() {
    return (
        <div className="Dashboard">
           <Route exact path="/" component={PostList} />
           <Route exact path="/posts" component={PostList} />
           
           <Route exact path="/posts/:id" component={PostDetail} />
           <Route exact path="/posts/category/:id" component={PostListByCategory} />
           <Route exact path="/posts/user/:id" component={PostListByUser} />

           <Route exact path="/posts-crud" component={PostCrud} />
           <Route exact path="/posts-add-to-category/:id" component={PostAdd} />
           <Route exact path="/post-update/:id" component={PostUpdate} />

           <Route exact path="/image-add/:id" component={ImageAdd} />
           
           <Route exact path="/categories-crud" component={CategoryCrud} />
           <Route exact path="/category-add" component={CategoryAdd} />
           <Route exact path="/category-update/:id" component={CategoryUpdate} />

           <Route exact path="/login" component={Login} />
        </div>
    )
}
