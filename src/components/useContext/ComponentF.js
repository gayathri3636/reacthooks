import React,{useContext} from 'react'
import {userContext, channelContext} from './App';

export default function ComponentF() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)

    return (
        <div>
            {/* <userContext.Consumer>
                {user => {
                    return (
                        <channelContext.Consumer>
                            {
                                channel => {
                                    return <div>user context value {user} channel context value{channel}</div>
                                }
                            }
                        </channelContext.Consumer>
                    )
                }}
            </userContext.Consumer> */}

            {/*The other way of doing it is like below code*/}
            {user}-{channel}
        </div>
    )
}
