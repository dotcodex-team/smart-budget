import React from 'react'
import { Menu } from 'rbx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root : {
      padding : 15,
      background : '#f8f8f8',
      width : 350, 
      height: '100vh',
      "& p" : {
          color : 'red'
      }
    }
  })
export default function Test(){
    const classes = useStyles()
    return (
        <Menu className={classes.root}>
            <Menu.Label>General</Menu.Label>
            <Menu.List>
                <Menu.List.Item>Dashboard</Menu.List.Item>
                <Menu.List.Item>Customer</Menu.List.Item>
            </Menu.List>
            <Menu.Label>Administration</Menu.Label>
            <Menu.List >
                <Menu.List.Item>Team Settings</Menu.List.Item>
                <Menu.List.Item
                active
                menu={
                    <Menu.List>
                    <Menu.List.Item>Members</Menu.List.Item>
                    <Menu.List.Item active>Plugins</Menu.List.Item>
                    <Menu.List.Item>Add a member</Menu.List.Item>
                    </Menu.List>
                }
                >
                Manage Your Teeam
                </Menu.List.Item>
                <Menu.List.Item>Invitations</Menu.List.Item>
                <Menu.List.Item>Cloud Storage Environment Settings</Menu.List.Item>
                <Menu.List.Item>Authentication</Menu.List.Item>
            </Menu.List>

            <Menu.Label>Transactions</Menu.Label>
            <Menu.List>
                <Menu.List.Item>Payments</Menu.List.Item>
                <Menu.List.Item>Transfers</Menu.List.Item>
                <Menu.List.Item>Balance</Menu.List.Item>
            </Menu.List>
        </Menu>
    )


}