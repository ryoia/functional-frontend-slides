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
  coffee: require('./coffee.gif'),
  comfort_zone: require('./comfort_zone.png'),
  console_minus: require('./console_minus.png'),
  console_plus: require('./console_plus.png'),
  copies: require('./copies.png'),
  does_not_simply: require('./does_not_simply.png'),
  ew: require('./ew.png'),
  expand_comfort: require('./expand_comfort.png'),
  false: require('./false.png'),
  fp: require('./fp.png'),
  github: require('./github.png'),
  haskell: require('./haskell.png'),
  hidechange: require('./hidechange.png'),
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
  reactImmu: require('./reactImmu.png'),
  reactjs: require('./reactjs.png'),
  smart: require('./i_am_smart.gif'),
  tries: require('./tries.png'),
  typeof_nan: require('./typeof_nan.png')
};

//preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck>
        <Slide bgColor="white" transition={["zoom", "slide"]} transitionDuration={100}>
          <Heading size={1} fit caps textColor="black">
            Front-end can be more functional
          </Heading>
          <Text>- Julia Gao</Text>
        </Slide>
        <Slide bgColor="white" transition={['slide']} >
          <Heading size={4} textColor="black">
            Who Am I?
          </Heading>
        </Slide>
        <Slide bgColor="white" 
          notes="Who am i...I'm a software developer at O.C. Tanner, I like astronomy, reactjs, functional programming, league of legends, and mario kart, so if you are interested in any of those things, I'd like to chat with you">
          <Image height="20%" width="30%" margin="10" src={images.github}/>
          <Image height="20%" width="30%" margin="10" src={images.bigbang}/>
          <Image height="20%" width="30%" margin="10" src={images.reactjs}/>
          <Image height="20%" width="30%" margin="10" src={images.fp}/>
          <Image height="20%" width="30%" margin="10" src={images.lol}/>
          <Image height="20%" width="30%" margin="10" src={images.mario8}/>
        </Slide>
        <Slide bgColor="white" transition={['slide']}  
          notes="So I'm gonna talk about some concepts of functional programming first, so then the examples later will make sense. ">
          <List>
            <ListItem textSize="60"><Appear fid="1">
              FP?
            </Appear></ListItem>
            <ListItem textSize="60"><Appear fid="2">
              FP in your front-end?
            </Appear></ListItem>
          </List>
        </Slide>
        <Slide bgColor="white" transition={['slide']} 
          notes="if some of you have seen this before, it's obviously a joke, but also kinda true. fp emphasizes what simple functions can do, and there are a lot of concepts, but i'm going to introduce two simpler ones today">
          <Image width="100%" height="100%" src={images.oo_fp_patterns} />
        </Slide>
        <Slide bgColor="white" notes="stateless functions, and immutable data structures. Now, let's learn more about these two concepts, so you will then understand how they may help you"transition={['slide']} >
          <Heading textColor="black">
            Stateless  Composable  Immutable
          </Heading>
        </Slide>
        <Slide bgColor="white" 
          notes="regardless of changes outside of that function. Which means, no matter how many times the function is getting called, the output should be the same with the same parameters. This makes the function really predictable, and easy to test/write/think about.">
          <Heading size={2} textColor="black">
            Stateless
          </Heading>
          <Heading size={2} textColor="black">
            Pure, Idempotent
          </Heading>
          <Heading size={4} textColor="black">
            Same argument? same output.           
          </Heading>
        </Slide>
        <Slide bgColor="white" 
          notes="the absolute function, calculates a value's distance to 0. so this code makes sense, right? You call the same function 3 times, with same params, it produces same output. how simple it'd be to write/test/think about our code if it behaves like that. think about how pissed off you'd be if you call absolute value again later and it gives you something completely different">
          <CodePane
            textSize="40"
            lang="javascript"
            source={require("raw!./abs.example")}
            margin="20px auto"/>
          <Appear fid="1">
            <Heading size={5} textColor="black">
              Advantages?
            </Heading>
            <List>
              <ListItem><Appear fid="2"> No side effects</Appear></ListItem>
              <ListItem><Appear fid="3"> Function acts the same whenever you call it</Appear></ListItem>
              <ListItem><Appear fid="4"> Fewer bugs</Appear></ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="white"  notes="Can be due to somebody else changed something somewhere, we don't want that to happen">
          <Text>When a thing that worked on Friday no longer works on Monday</Text>
          <Image width="100%" height="100%" src={images.not_working} />
        </Slide>
        <Slide bgColor="white" 
          notes="The doStuff function here has side effects because the result depends on what the globalVariable is, and globalVariable can be changed by doOtherStuff function. This isn’t what we want because now the outputs are not the same when we pass in the same arguments every time.">
          <CodePane
            textSize="30"
            lang="javascript"
            size
            source={require("raw!./side_effect.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" >
          <CodePane
            textSize="30"
            lang="javascript"
            size
            source={require("raw!./less_side_effect.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white">
          <Appear>
            <CodePane
              textSize="40"
              lang="javascript"
              source={require("raw!./abs.example")}
              margin="20px auto"/>
          </Appear>
          <Appear>
            <CodePane
              textSize="40"
              lang="javascript"
              source={require("raw!./square.example")}
              margin="20px auto"/>
          </Appear>
          <Appear>
            <CodePane
              textSize="40"
              lang="javascript"
              source={require("raw!./sqrabs.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>
        <Slide bgColor="white">
          <Heading size={2} color="black">Composable Functions</Heading>
          <Appear><Text>f(x) = x ^ 2</Text></Appear>
          <Appear><Text>g(x) = |x|</Text></Appear>
          <Appear><Text>(f ∘ g)(x) = f(g(x)) = |x| ^ 2</Text></Appear>
        </Slide>
        <Slide bgColor="white">
          <Image width="100%" height="100%" src={images.smart} />
        </Slide>
        <Slide bgColor="white">
          <Heading size={2} color="black">How does that apply to JavaScript/Programming?</Heading>
        </Slide>
        <Slide bgColor="white" note="">
          <Text>let as = ['a', 'b', 'c', 'e', 'z']</Text>
          <Appear><Text>as.splice(0, 2)</Text></Appear>
          <Appear><Text>//['a', 'b']</Text></Appear>
          <Appear><Text>//as = ['c', 'e', 'z']</Text></Appear>
          <Appear><Text>as.slice(0, 2)</Text></Appear>
          <Appear><Text>//['a', 'b']</Text></Appear>
          <Appear><Text>//as = ['a', 'b', 'c', 'e', 'z']</Text></Appear>
        </Slide>
        <Slide bgColor="white">
          <CodePane
            textSize="20"
            lang="javascript"
            source={require("raw!./pure-sqr.example")}
            margin="20px auto"/>
          <CodePane
            textSize="20"
            lang="javascript"
            source={require("raw!./pure-divide2.example")}
            margin="20px auto"/>
          <CodePane
            textSize="20"
            lang="javascript"
            source={require("raw!./pure-combo.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white">
            <Link textSize="50" href="https://jsbin.com/mejeli/7/edit?html,js,output">Example</Link>
        </Slide>
        <Slide bgColor="white"  notes="the 3rd concept is: ">
          <Appear><Heading size={5}>Immutable Data Structures</Heading></Appear>
          <Appear><Image height="500px" src={images.does_not_simply} /></Appear>
        </Slide>
        <Slide bgColor="white"  notes="Why is immutability crucial. Think about the function we have, we pass in some parameters, but if they are mutable, we may do something within the function that changes the passed in value, no guarantee. think about ++5, what if not only returns a 6, but changes all 5's to 6's. or hi, we are not changing all hi's to hibye">
          <Heading textColor="black" size={6}>++5 </Heading>
          <Heading textColor="black" size={6}>'hi' += 'bye'</Heading>
          <Appear>
            <CodePane
              textSize="30"
              lang="javascript"
              size
              source={require("raw!./cal_in_fn.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>
        <Slide bgColor="white"  notes="so here, you changes a person's name, but you are mutating the passed in person object. imaging that's the a value from the previous slide. after image: now the person has no way to tell whether the property got changed, since the old age property is gone and developers can't even compare the before and after...of course you can do console log before and after, but...">
            <CodePane
              textSize="30"
              lang="javascript"
              size
              source={require("raw!./getOlder.example")}
              margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" >
          <Image width="100%" src={images.hidechange} />
        </Slide>
        <Slide bgColor="white" >
          <Image width="60%" src={images.ew} />
        </Slide>
        <Slide bgColor="white" notes="so instead, you can return a new object, but this gets tedious if an object contains a lot of fields" >
            <CodePane
              textSize="30"
              lang="javascript"
              size
              source={require("raw!./getOlderImmu.example")}
              margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" 
          notes="so instead, we can use object.assign, which creates a new object that copies everything in person, and updates the age property. or use es6's rest and spread, so we deconstruct the age property first, and copy whatever is left">
            <CodePane
              textSize="30"
              lang="javascript"
              size
              source={require("raw!./objAssign.example")}
              margin="20px auto"/>
            <CodePane
              textSize="30"
              lang="javascript"
              size
              source={require("raw!./es6.example")}
              margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" >
          <Heading size={1} textColor="black" fit caps>FP in your Front-end</Heading>
        </Slide>
        <Slide bgColor="white" >
          <Heading size={1} textColor="black" fit caps>Disclaimer</Heading>
        </Slide>
        <Slide bgColor="white" >
          <Appear>
            <Image height="20%" width="30%" margin="10"  src={images.nullJS} />
          </Appear>
          <Appear>
            <Image height="20%" width="40%" margin="10" src={images.nan} />
          </Appear>
          <Appear>
            <Image height="20%" width="40%" margin="10" src={images.console_minus} />
          </Appear>
        </Slide>
        <Slide bgColor="white" >
          <Appear>
            <Image height="20%" width="40%" margin="10" src={images.console_plus} />
          </Appear>
          <Appear>
            <Image height="20%" margin="10" width="40%" src={images.false} />
          </Appear>
          <Appear>
            <Image height="20%" margin="10" width="40%" src={images.typeof_nan} />
          </Appear>
        </Slide>
        <Slide bgColor="white" >
          <Image width="100%" src={images.make_better} />
        </Slide>
        <Slide bgColor="white" >
          <Image width="80%" height="600px" src={images.make_let} />
        </Slide>
        <Slide bgColor="white"  notes="let and const are block scoped, no more hoisting. const wouldn’t let you change the value, however, like what I said about the disclaimer, this is still javascript, which means some values can be changed.">
          <Image src={images.make_const} />
        </Slide>
        <Slide bgColor="white"  notes="let and const are block scoped, no more hoisting. let variables can still be mutated. ">
          <CodePane
            lang="javascript"
            textSize="30"
            size
            source={require("raw!./let.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white"  notes="const variables cannot be changed once assigned, also, they have to be initialized when declared.">
          <CodePane
            lang="javascript"
            textSize="30"
            size
            source={require("raw!./const.example")}
            margin="20px auto"/>
        </Slide>
        <Slide  bgColor="white" 
          notes="up to this point, we simply used JavaScript syntax. but if you want to take functional programming to another level on the front-end, you can use: ...">
          <Heading size={4}>Tools beyond JavaScript</Heading>
            <Appear><Text textSize="60">ImmutableJS with ReactJS</Text></Appear>
            <Appear><Text textSize="60">ClojureScript</Text></Appear>
            <Appear><Text textSize="60">PureScript</Text></Appear>
            <Appear><Text textSize="60">What do you use?</Text></Appear>
        </Slide>
        <Slide bgColor="white"  notes="This already looks promising since immutability is one of the cores concept to FP. ImmutableJS provides immutable data structures, like maps, sets, and lists, and they mostly follow the same apis as the new data structures in es6 of the same names, but the ones in immutablejs can never mutates, which means, you make a data structure every time there is a change.">
          <Heading size={1} textColor="black" caps>ImmutableJS</Heading>
        </Slide>
        <Slide bgColor="white"  notes="I wanted to make my preparing process immutable as well. so now you may wonder, since I’m making a copy of every time I make a change, this is super heavy and slow. ">
          <Image width="100%" src={images.copies} />
        </Slide>
        <Slide bgColor="white" >
          <Heading size={6}>But that's so inefficient!</Heading>
          <Image width="100%" src={images.inefficient} />
        </Slide>
        <Slide bgColor="white"  notes="immutablejs uses hashmap and vector tries, so only copy the changed items instead of the entire list. so say you change the value 4, then change the whole path. and the values didn't get changed share the same reference. normally this sounds like a bad idea because the shared data can be changed, but since the data can't be changed, then it's safe to safe memory">
          <Text>Persistent Data Structures</Text>
          <Image width="100%" src={images.tries} />
        </Slide>
        <Slide bgColor="white"  notes="When I first read this, I was like, this is genius">
          <Image width="80%" src={images.clap} />
        </Slide>
        <Slide bgColor="white"  notes="Here's a comparison between regular js and immutablejs">
          <Layout>
            <Fill>
              <CodePane
                textSize="18"
                lang="javascript"
                size
                source={require("raw!./regularjs.example")}
                margin="20px auto"/>
            </Fill>
            <Fill>
              <CodePane
                textSize="18"
                lang="javascript"
                size
                source={require("raw!./immutablejs.example")}
                margin="20px auto"/>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="white"  notes="so let's use immutablejs">
          <Text textSize="60">Here's another example</Text>
          <Appear>
            <CodePane
              textSize="25"
              lang="javascript"
              size
              source={require("raw!./nestedImmuJS.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>
        <Slide bgColor="white">
          <Heading size={2}>Switching Gears</Heading>
          <Image src={images.coffee} width="100%" />
        </Slide>
        <Slide bgColor="white"  notes="Clojure is a dialect of Lisp, and clojurescript is a dialect of Clojure that compiles to javascript. Clojurescript also has immutable data structures, and since it’s a dialect of Lisp, it has Lisp syntax.">
          <Heading size={2} textColor="black">ClojureScript</Heading>
          <CodePane
            textSize="25"
            lang="clojure"
            size
            source={require("raw!./clojs.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" >
          <Text>Modular:</Text>
          <Code>(ns myapp...</Code>
          <Text></Text>
          <Code>(ns hello_world.core...</Code>
          <Text>Immutable Data Structure: </Text>
          <Code>
            (def v [1 2 3]) -> [1 2 3]
            <Text></Text>
            (conj v 4) -> [1 2 3 4]
            <Text></Text>
             v -> [1 2 3]
          </Code>
        </Slide>
        <Slide bgColor="white"  notes="Reagent, can write react components in clojurescript, similar to regular functions as components in react 0.14">
          <Heading size={2} cap>reagent</Heading>
          <CodePane
            textSize="25"
            lang="clojure"
            size
            source={require("raw!./reagent1.example")}
            margin="20px auto"/>
          <CodePane
            textSize="25"
            lang="clojure"
            size
            source={require("raw!./reagent2.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white"  notes="so all the built-in data structures are immutable in clojure, so how do you change variables. clojure uses atoms, which is another data structure, to hold immutable data, and when you change a variable, it changes by applying the swap! function, so atoms is mutable.">
          <CodePane
            textSize="25"
            lang="clojure"
            size
            source={require("raw!./atom.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white"  notes="Reagent has its own version of atom, which re-renders itself whenever it’s changed by tracking when it is deref’ed. sounds familiar??">
          <CodePane
            textSize="25"
            lang="clojure"
            size
            source={require("raw!./reagent_atom.example")}
            margin="20px auto"/>
            <Link textSize="50" href="http://clojure.org/atoms">Clojure Atom</Link>
        </Slide>
        <Slide bgColor="white"  notes="written in Haskell, strongly typed language that compiles to javascript. Hence, everything else is impurescript.">
          <Heading cap size={2}>PureScript</Heading>
          <Image width="100%" src={images.haskell} />
        </Slide>
        <Slide bgColor="white" >
          <CodePane
            textSize="25"
            lang="haskell"
            size
            source={require("raw!./purs.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="white" >
          <CodePane
            textSize="25"
            lang="haskell"
            size
            source={require("raw!./getOlderPure.example")}
            margin="20px auto"/>
          <Link textSize="50" href="https://github.com/purescript/purescript/wiki">PureScript Wiki</Link>
        </Slide>
        <Slide bgColor="white" >
          <Image width="100%" src={images.comfort_zone} />
        </Slide>
        <Slide bgColor="white" >
          <Image width="100%" src={images.expand_comfort} />
        </Slide>
        <Slide bgColor="white"  transition={['slide']} 
          notes="this is all i have, so if you wanna chat with any of these, or other interesting sciency things">
          <Image height="20%" width="30%" margin="10" src={images.github}/>
          <Image height="20%" width="30%" margin="10" src={images.bigbang}/>
          <Image height="20%" width="30%" margin="10" src={images.reactjs}/>
          <Image height="20%" width="30%" margin="10" src={images.fp}/>
          <Image height="20%" width="30%" margin="10" src={images.lol}/>
          <Image height="20%" width="30%" margin="10" src={images.mario8}/>
        </Slide>
        <Slide bgColor="white" >
          <Heading size={4}>https://github.com/ryoia/reactive-conf-slides</Heading>
          <Heading size={4}>Twitter: @ryoia</Heading>
        </Slide>
        <Slide bgColor="white" >
          <Heading size={2}>Thank you!</Heading>
        </Slide>
      </Deck>
    );
  }
}
