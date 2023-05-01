import style from "./home.module.css";

import Container from "../../components/layout/container";
import Card from "../../components/ui/card/card";
import Icon from "../../components/ui/icon/icon";
import Grid from "../../components/ui/grid/grid";

import ContentCreators from "../../assets/list/content-creators.json";
import Projects from "../../assets/list/projects.json";
import Works from "../../assets/list/works.json";

export default function Home() {
    return (
        <Container>
            <div className={style.grid}>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#4527A0'}}>
                    <h2>Hey, my name is Ailakks! :D</h2>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and
                        JavaScript.</h3>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#F44336'}}>
                    <h1>120 days</h1>
                    <h2>until my birthday, which is February 25.</h2>
                </Card>
                <Card link="https://twitter.com/Ailakks" style={{gridColumnStart: 1, gridColumnEnd: 2, backgroundColor: '#1DA1F2'}}>
                    <Icon icon="fa-brands fa-twitter" />
                    <h3>I tweet about my projects, nonsense, some politics, and sometimes memes :)</h3>
                </Card>
                <Card link="https://github.com/Ailakks" style={{gridColumnStart: 2, gridColumnEnd: 3, backgroundColor: '#171515'}}>
                    <Icon icon="fa-brands fa-github" />
                    <h3>I code a lot. Looking into more open-source projects.</h3>
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#B0BEC5', color: 'black'}}>
                    <h2>Some of my skills :)</h2>
                    <img src="https://skillicons.dev/icons?i=java,js,ts,linux,html,css,react,vue,nextjs,webflow,vite,electron,express,graphql,nestjs,sqlite,mysql,mongo,redis,bots,nginx,cloudflare,grafana,git,nodejs,maven,gradle,gcp,azure,heroku,vscode,idea,postman&perline=11" />
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#6A1B9A'}}>
                    <h2>Content creators I worked for</h2>
                    <Grid list={ContentCreators} />
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#1E88E5'}}>
                    <h2>Projects I've been part of</h2>
                    <Grid list={Projects} />
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 3, backgroundColor: '#180E33'}}>
                    <h2>Music I like</h2>
                </Card>
                <Card style={{gridColumnStart: 3, gridColumnEnd: 7, backgroundColor: '#004D40'}}>
                    <h2>More about me!</h2>
                    <h3>I'm a passionate 17-year-old developer who loves building cool stuff with Java and JavaScript.
                        I'm particularly skilled in designing websites and creating robust APIs using the latest
                        technologies like React and NestJS. I also have experience in crafting Minecraft plugins using
                        PaperMC, BungeeCord & Velocity APIs and I enjoy working with databases like MongoDB, Redis, and
                        occasionally MySQL.</h3>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#FFC107'}}>
                    <h3>Games I love</h3>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#DD2C00'}}>
                    <h3>Minecraft software I work with</h3>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 4, backgroundColor: '#5865F2'}}>
                    <Icon icon="fa-brands fa-discord" />
                    <h3>Discord community, certainly inactive, but well, we are still there.</h3>
                </Card>
                <Card style={{gridColumnStart: 4, gridColumnEnd: 7, backgroundColor: '#180E33', justifyItems: 'center'}}>
                    <h3>I'm from...</h3>
                    <h1>Spain</h1>
                </Card>
                <Card style={{gridColumnStart: 1, gridColumnEnd: 5, backgroundColor: '#180E33'}}>
                    <h3>My setup</h3>
                </Card>
                <Card style={{gridColumnStart: 5, gridColumnEnd: 7, backgroundColor: '#180E33', justifyItems: 'center'}}>
                    <h3>Timezone</h3>
                    <h1>GMT+2</h1>
                </Card>
            </div>
        </Container>
    )
}
