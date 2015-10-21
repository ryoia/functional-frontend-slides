import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
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
          notes="So basically, a function call either returns a value, or another function call.
          Now, let's see two concepts that hopefully make the functional-style make more sense">
          <Image width="100%" height="100%" src={images.oo_fp_patterns} />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading>
            Stateless & Immutable
          </Heading>
        </Slide>
        <Slide>
          <Heading>
            Stateless (Idempotence)
          </Heading>
          <Text>
            Same argument, same output, regardless of changes outside of that function.
            Which means, no matter how many times the function is getting called, 
            the output should be the same with the same parameters
          </Text>
        </Slide>
        <Slide>
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
        <Slide notes="Can be due to somebody else changed something somewhere, we don't want that to happen">
          <Text>When a thing that worked on Friday no longer works on Monday</Text>
          <Image width="100%" height="100%" src={images.not_working} />
        </Slide>
        <Slide
          notes="The doStuff function here has side effect because the result depends on what the globalVariable is, and globalVariable can be changed by doOtherStuff function. This isn’t what we want because now the outputs are not the same when we pass in the same arguments every time.
          ">
          <CodePane
            lang="javascript"
            size
            source={require("raw!./side_effect.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            size
            source={require("raw!./less_side_effect.example")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Appear><Heading size={6}>Immutable Data Structures</Heading></Appear>
          <Appear><Image height="500px" src={images.does_not_simply} /></Appear>
        </Slide>
        <Slide>
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

        <Slide transition={["slide"]} bgDarken={0.75}>
          <Image width="100%" src={images.inefficient}/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.lol}/></Link>
        </Slide>
        <Slide transition={['slide']} bgColor="white">
          <Text>
            github.com/ryoia/reactive-conf-slides
          </Text>
        </Slide>
      </Deck>
    );
  }
}
