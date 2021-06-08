import React from 'react'
import classes from './styles.module.css'
import {connect} from 'react-redux'
import logo from '../../assets/github-icon.svg'

function mapStateToProps(state) {
    const { user } = state
    return { username: user }
}

const Content = (props) => {
    const { avatar_url,name,login, bio  } = props.username;
    return (
        <div className={classes.root}>
                
                    <img src={avatar_url || logo} alt="" className={classes.img} />
                    <h1>{name || "Username"}</h1>
                    <h2>{login || "Login"}</h2>
                    <p>{bio || "About User"}</p> 
               
          
        </div>
    )
}

export default connect(mapStateToProps)(Content)
