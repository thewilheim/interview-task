import React from "react";
import TooltipSidebarModal from "./components/TooltipSidebarModal";

function App() {

  const mockTextBody = "Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish"

  const mockTextBodyTwo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nihil quia consequuntur. Est, repudiandae, soluta pariatur nostrum impedit officiis expedita numquam sint laudantium et commodi ducimus fugiat necessitatibus placeat blanditiis autem voluptatum aliquid ratione, rem corrupti deserunt ullam nam laborum. Numquam quibusdam doloribus enim sapiente repellat in nemo molestias magnam beatae ratione quisquam, soluta modi distinctio consectetur ducimus deleniti ea assumenda dolorem? Commodi, adipisci nesciunt! Saepe, quaerat nulla? Porro nesciunt quia, necessitatibus blanditiis atque, in ex quod et exercitationem debitis aperiam molestias id dolor, corrupti fugit ut voluptatum nulla nemo dolorem. Praesentium labore magni, quam rerum consequatur iure tenetur ipsum?"

  return (
    <div className="App">
      <h1>Tooltip Sidebar Modal - Interview Task</h1>
      <h2>Usage</h2>
      <p>
        Tooltip Sidebar Modal can work well for people who use a service
        regularly. the idea for this component to provide more context or a longer explanations for technical or industry-specific terms.
      </p>
      <h2>Examples</h2>
      <h4>Tooltip Sidebar Modal</h4>
      <p>
        <TooltipSidebarModal informationText={mockTextBody} isHyperLink={true} title="Lorem Ipsum" subTitle="What is Lorem Ipsum" hyperLinkText="Lorem Ipsum"/> dolor sit amet consectetur, adipisicing elit. Dolor, facilis. Voluptatem debitis obcaecati quidem. Quae distinctio consequatur fuga at reprehenderit ad alias, sequi et, necessitatibus ullam non sit. Iste facere repudiandae ipsa in impedit vel eligendi labore, numquam nam consequatur, harum, omnis ullam dolorum commodi. Fuga aut atque ipsum quos doloremque modi unde natus nam veniam repellendus cumque doloribus dolores consequatur nemo fugit iste eos tempore, eveniet necessitatibus pariatur. Tempore sint assumenda reprehenderit quo sequi? Ut, cupiditate quisquam iste, perferendis unde tempore dolore ipsam architecto quam incidunt non, omnis sapiente quo itaque voluptas esse deleniti culpa ex deserunt vitae pariatur?
      </p>

      <h4>Tooltip Sidebar Modal With Icon </h4>
      <p>
        Lorem Ipsum dolor sit amet consectetur, adipisicing elit. Dolor, facilis. Voluptatem debitis obcaecati quidem. Quae distinctio consequatur fuga at reprehenderit ad alias, sequi et, necessitatibus ullam non sit. Iste facere repudiandae ipsa in impedit vel eligendi labore, numquam nam consequatur, harum, omnis ullam dolorum commodi. Fuga aut atque ipsum quos doloremque modi unde natus nam veniam repellendus cumque doloribus dolores consequatur nemo fugit iste eos tempore, eveniet necessitatibus pariatur. Tempore sint assumenda reprehenderit quo sequi? Ut, cupiditate quisquam iste, perferendis unde tempore dolore ipsam architecto quam incidunt non, omnis sapiente quo itaque voluptas esse deleniti culpa ex deserunt vitae pariatur? <TooltipSidebarModal informationText={mockTextBodyTwo} title="Lorem Ipsum Title" subTitle="What really is Lorem Ipsum" hyperLinkText="Lorem Ipsum"/>
      </p>
    </div>
  );
}

export default App;
