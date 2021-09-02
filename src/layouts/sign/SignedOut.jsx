import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function SignedOut() {
    return (
        <div>
            <Button icon="user secret" inverted as={NavLink} to="/login" />
        </div>
    )
}