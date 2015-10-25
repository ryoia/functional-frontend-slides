import React from "react/addons";

import {
  Appear, BlockQuote, Cite, Code, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  bigbang: require('./bigbang.gif'),
  clap: require('./clap.gif'),
  clojure_atom: require('./clojure_atom.png'),
  comfort_zone: require('./comfort_zone.png'),
  console_minus: require('./console_minus.png'),
  console_plus: require('./console_plus.png'),
  copies: require('./copies.png'),
  does_not_simply: require('./does_not_simply.png'),
  expand_comfort: require('./expand_comfort.png'),
  false: require('./false.png'),
  fp: require('./fp.png'),
  haskell: require('./haskell.png'),
  inefficient: require('./inefficient.gif'),
  lol: require('./lol.png'),
  make_better: require('./make_better.png'),
  make_const: require('./make_const.png'),
  make_let: require('./make_let.png'),
  mario8: require('./mario8.jpg'),
  nan: require('./nan.png'),
  not_working: require('./not_working.gif'),
  nullJS: require('./null.png'),
  oo_fp_patterns: require('./oo_fp_patterns.png'),
  purescript: require('./purscript.png'),
  reactjs: require('./reactjs.png'),
  tries: require('./tries.png'),
  typeof_nan: require('./typeof_nan.png')
};

//preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit caps textColor="black">
            Front-end can be more functional
          </Heading>
          <Text>- Julia Gao</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="white"
          notes="Who am i...I like astronomy and reactjs and functional programming
          and video games, so if you are interested in any of those things, I'd like to chat with you">
          <Heading size={2} textColor="black">
            Who Am I?
          </Heading>
          <Image height="20%" width="30%" margin="10" src={images.bigbang}/>
          <Image height="20%" width="30%" margin="10" src={images.reactjs}/>
          <Image height="20%" width="30%" margin="10" src={images.fp}/>
          <Image height="20%" width="30%" margin="10" src={images.lol}/>
          <Image height="20%" width="30%" margin="10" src={images.mario8}/>
        </Slide>
        <Slide transition={['slide']} bgColor="white" notes="So I'm gonna do a super quick introduction on functional programming before we dive into how to make frontend more functional">
          <List>
            <ListItem><Appear fid="1">
              Main Conepts on Functional Programming
            </Appear></ListItem>
            <ListItem><Appear fid="2">
              How to make our front-end applications more functional using the tools we currently have
            </Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="white"
          notes="So basically, a function call either returns a value, or another function call. Now, let's see two concepts that hopefully make the functional-style make more sense">
          <Image width="100%" height="100%" src={images.oo_fp_patterns} />
        </Slide>
        <Slide transition={['slide']} bgColor="white">
          <Heading>
            Stateless & Immutable
          </Heading>
        </Slide>
        <Slide bgColor="white">
          <Heading size={2} textColor="black">
            Stateless (Idempotence)
          </Heading>
          <Text>
            Same argument, same output, regardless of changes outside of that function.
            Which means, no matter how many times the function is getting called, 
            the output should be the same with the same parameters
          </Text>
        </Slide>
        <Slide bgColor="white">
          <CodePane
            lang="javascript"
            source={require("raw!./abs.example")}
            margin="20px auto"/>
          <Appear fid="1">
            <Heading>
              Advantages?
            </Heading>
            <List>
              <ListItem><Appear fid="2"> No side effects</Appear></ListItem>
              <ListItem><Appear fid="3"> Function acts the same whenever you call it</Appear></ListItem>
              <ListItem><Appear fid="4"> Fewer bugs</Appear></ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="white" notes="Can be due to somebody else changed something somewhere, we don't want that to happen">
          <Text>When a thing that worked on Friday no longer works on Monday</Text>
          <Image width="100%" height="100%" src={images.not_working} />
        </Slide>
        <Slide bgColor="white"
          notes="The doStuff function here has side effect because the result depends on what the globalVariable is, and globalVariable can be changed by doOtherStuff function. This isn’t what we want because now the outputs are not the same when we pass in the same arguments every time.">
          <CodePane
            lang="javascript"
            size
            source={require("raw!./side_effect.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white">
          <CodePane
            lang="javascript"
            size
            source={require("raw!./less_side_effect.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white">
          <Appear><Heading size={6}>Immutable Data Structures</Heading></Appear>
          <Appear><Image height="500px" src={images.does_not_simply} /></Appear>
        </Slide>
        <Slide bgColor="white" notes="Why immutability is crucial. Think about the function we have, we pass in some parameters, but if they are mutable, we may do something within the function that changes the passed in parameter, so that doesn’t guarantee our results anymore. What would happen if you have a mutable data structure that will be changed in two different threads, the result wouldn’t be consistent and the change being made in the slow thread can be overriden. ">
          <Heading size={6}>ImmutableDataStructures</Heading>
          <Text>Once assigned, can't be mutated. e.g. 5, "hi"</Text>
          <Appear>
            <Text>Why?</Text>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              size
              source={require("raw!./cal_in_fn.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>
        <Slide bgColor="white">
          <Text>How to change this function to use immutable data structures?</Text>
            <CodePane
              lang="javascript"
              size
              source={require("raw!./findMaxMutable.example")}
              margin="20px auto"/>
          <Text>Recursion!</Text>
        </Slide>
        <Slide bgColor="white">
            <CodePane
              lang="javascript"
              size
              source={require("raw!./findMaxRecursion.example")}
              margin="20px auto"/>
        </Slide>
        <Slide bgColor="white">
          <Heading size={1} textColor="black" fit caps>How to Make Frontend More Functional</Heading>
        </Slide>
        <Slide bgColor="white">
          <Heading size={1} textColor="black" fit caps>Disclaimer</Heading>
        </Slide>
        <Slide bgColor="white">
          <Appear>
            <Image margin="0px auto 40px" width="20%" src={images.nullJS} />
          </Appear>
          <Appear>
            <Image width="20%" src={images.nan} />
          </Appear>
          <Appear>
            <Image width="20%" src={images.console_minus} />
          </Appear>
          <Appear>
            <Image width="20%" src={images.console_plus} />
          </Appear>
          <Appear>
            <Image width="20%" src={images.false} />
          </Appear>
          <Appear>
            <Image width="20%" src={images.typeof_nan} />
          </Appear>
        </Slide>
        <Slide bgColor="white">
          <Image width="100%" src={images.make_better} />
        </Slide>
        <Slide bgColor="white">
          <Image width="80%" height="600px" src={images.make_let} />
        </Slide>
        <Slide bgColor="white" notes="let and const are block scoped, no more hoisting. const wouldn’t let you change the value, however, like what I said about the disclaimer, this is still javascript, which means some values can be changed.">
          <Image src={images.make_const} />
        </Slide>
        <Slide bgColor="white" notes="let and const are block scoped, no more hoisting. let variables can still be mutated. ">
          <CodePane
            lang="javascript"
            size
            source={require("raw!./let.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" notes="const variables cannot be changed once assigned, they have to be initialized when declared.">
          <CodePane
            lang="javascript"
            size
            source={require("raw!./const.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white">
          <Heading size={6}>Libraries/Frameworks that can make front-end more functional</Heading>
          <List>
            <ListItem>ImmutableJS with ReactJS</ListItem>
            <ListItem>ClojureScript</ListItem>
            <ListItem>PureScript</ListItem>
            <ListItem>What do you use?</ListItem>
          </List>
        </Slide>
        <Slide bgColor="white" notes="This already looks promising since immutability is one of the cores FP has. ImmutableJS provides immutable data structures, so like map, set, list are immutable, which means, you make a data structure every time there is a change.">
          <Heading size={1} textColor="black" caps>ImmutableJS</Heading>
        </Slide>
        <Slide bgColor="white" notes="put copies of powerpoints here. explaining I wanted to make my preparing process immutable as well. so now you may wonder, since I’m making a copy of every time I make a change, this is super heavy and slow. but, immutablejs actually has this persistent data structures, which means they make a copy of the changed items, then link it back to the unchanged things. this is a simplified version of course, if you want to learn more specifics, do look up tries implementation that immutablejs uses. ">
          <Image width="100%" src={images.copies} />
        </Slide>
        <Slide bgColor="white">
          <Heading size={6}>But that's so inefficient!</Heading>
          <Image src={images.inefficient} />
        </Slide>
        <Slide bgColor="white" notes="immutablejs uses trie so only copy the changed items instead of the entire list">
          <Text>Persistent Data Structure HashMap Tries, Vector Tries</Text>
          <Image width="100%" src={images.tries} />
        </Slide>
        <Slide bgColor="white" notes="When I first read this, I was like, this is genius">
          <Image src={images.clap} />
        </Slide>
        <Slide bgColor="white" notes="Here's a comparison between regular js and immutablejs">
          <Layout>
            <Fill>
              <CodePane
                lang="javascript"
                size
                source={require("raw!./regularjs.example")}
                margin="20px auto"/>
            </Fill>
            <Fill>
              <CodePane
                lang="javascript"
                size
                source={require("raw!./immutablejs.example")}
                margin="20px auto"/>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="white" notes="so let's use immutablejs">
          <Text>Here's another example</Text>
          <Appear>
            <CodePane
              lang="javascript"
              size
              source={require("raw!./nestedImmuJS.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>
        <Slide bgColor="white" notes="Clojure is a dialect of Lisp, and clojurescript is a dialect of Clojure that compiles to javascript. Clojurescript also has immutable data structures, and since it’s a dialect of Lisp, it has Lisp syntax.">
          <Heading size={1} textColor="black" cap>clojurescript</Heading>
          <CodePane
            lang="javascript"
            size
            source={require("raw!./clojs.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white">
          <Text>Modular:</Text>
          <Code>(ns myapp ...</Code>
          <Code>(ns hello_world.core ...</Code>
          <Text>Immutable Data Structure: </Text>
          <Code>
            (def v [1 2 3]) // v = [1 2 3]
            (conj v 4) // [1 2 3 4]
             v // [1 2 3]
          </Code>
        </Slide>
        <Slide bgColor="white" notes="Reagent, can write react components in clojurescript">
          <Heading size={2} cap>reagent</Heading>
          <CodePane
            lang="javascript"
            size
            source={require("raw!./reagent1.example")}
            margin="20px auto"/>
          <CodePane
            lang="javascript"
            size
            source={require("raw!./reagent2.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" notes="the intended use of atom is to hold one of Clojure's immutable data structures. And, similar to ref's alter and agent's send, you change the value by applying a function to the old value. This is done in an atomic manner by swap! Internally, swap! reads the current value, applies the function to it, and attempts to compare-and-set it in. Since another thread may have changed the value in the intervening time, it may have to retry, and does so in a spin loop. ">
          <Image src={images.clojure_atom} /> 
        </Slide>
        <Slide bgColor="white" notes="Reagent has its own version of atom, which re-renders itself whenever it’s changed by tracking when it is deref’ed. sounds familiar??">
          <CodePane
            lang="javascript"
            size
            source={require("raw!./reagent_atom.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" notes="written in Haskell, strongly typed language that compiles to javascript. Hence, everything else is impurescript.">
          <Heading cap size={2}>Purescript</Heading>
          <Image width="100%" src={images.haskell} />
        </Slide>
        <Slide bgColor="white">
          <CodePane
            lang="javascript"
            size
            source={require("raw!./purs.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white">
          <Image width="100%" src={images.comfort_zone} />
        </Slide>
        <Slide bgColor="white">
          <Image width="100%" src={images.expand_comfort} />
        </Slide>
        <Slide bgColor="white" transition={['slide']} bgColor="white"
          notes="this is all i have, so if you wanna chat with any of these, or other interesting sciency things">
          <Image height="20%" width="30%" margin="10" src={images.bigbang}/>
          <Image height="20%" width="30%" margin="10" src={images.reactjs}/>
          <Image height="20%" width="30%" margin="10" src={images.fp}/>
          <Image height="20%" width="30%" margin="10" src={images.lol}/>
          <Image height="20%" width="30%" margin="10" src={images.mario8}/>
        </Slide>
        <Slide bgColor="white">
          <Heading size={2}>Twitter: @ryoia</Heading>
        </Slide>
        <Slide bgColor="white">
          <Heading size={2}>Thank you!</Heading>
        </Slide>
      </Deck>
    );
  }
}
