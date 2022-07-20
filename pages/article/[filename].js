import React from 'react';
import { useRouter } from 'next/router'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {Waypoint, StackBar, Screenshot} from "../../mdx_components.js"

var state_sidebar = {active: true}

function toggleClass() {
    const currentState = state_sidebar.active;
    state_sidebar.active = !currentState;
    document.getElementById("sidebar").classList.remove(currentState ? "statePressed" : "stateDefault");
    document.getElementById("sidebar").classList.add(state_sidebar.active ? "statePressed" : "stateDefault");

    document.getElementById("menu-icon").classList.remove(currentState ? "statePressed" : "stateDefault");
    document.getElementById("menu-icon").classList.add(state_sidebar.active ? "statePressed" : "stateDefault");

    document.getElementById("content-wrapper").classList.remove(currentState ? "stateDefault" : "statePressed");
    document.getElementById("content-wrapper").classList.add(state_sidebar.active ? "stateDefault" : "statePressed");
};

const components = {
    Screenshot,
    StackBar,
    Waypoint
}

export default function Article({data}){
    const router = useRouter();
    return (
        <div id="page-wrapper">
            <div id="sidebar" className={state_sidebar.active ? "statePressed" : "stateDefault"}>
                <div id="menu-icon" className={state_sidebar.active ? "statePressed" : "stateDefault"} onClick={toggleClass}>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </div><br/>
                <div id="sidebar-list">
                    <a href="/article/about"><b>Home</b></a><br/>
                    <a href="/article/about"><b>About me</b></a><br/>
                    <a href="/article/projects"><b>Projects</b></a><br/>
                    <div id="link-list">
                        <a href="/article/projects#statuspanel">Custom status panel</a><br/>
                        <a href="/article/projects#reactiveirc">ReactiveIRC</a><br/>
                        <a href="/article/projects#jspdp8">PDP-8 emulator</a><br/>
                    </div>
                    <a href="/article/skills"><b>Skills</b></a>
                </div>
            </div>
            <div className="mobile-only"><br/></div>
            <div id="content-wrapper" className={state_sidebar.active ? "stateDefault" : "statePressed"}>
                <div id="content">
                    <MDXRemote {...data} components={components} />
                </div>
            </div>
        </div>
    )
}

// This is called on every request
export async function getServerSideProps(context){
    const filename = context.params.filename;
    const fs = require("fs");
    const path = require("path");
    var data = await serialize(fs.readFileSync(path.relative(".", `public/markdown/${filename}.mdx`)).toString());
    return {props: {data}}
}
  