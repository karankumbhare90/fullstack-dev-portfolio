import { TextComponent } from "./_components/TextComponents"

export default function Home() {
  const content = {
    headingTag: 'h2',
    subheadingTag: 'h4',
    heading: 'Hello Developer !!',
    subheading: 'Hello Developer !!',
    description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet officiis perspiciatis voluptates minima totam ducimus aut possimus fugiat debitis.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, quisquam!</p>`,
    rteContent: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet officiis perspiciatis voluptates minima totam ducimus aut possimus fugiat debitis.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, quisquam!</p>`,
    buttons: [
      {
        link: '/',
        target: '_blank',
        text: 'Click me'
      },
      {
        link: '/',
        target: '_blank',
        text: 'Click me 2'
      }
    ]
  }

  return (
    <section>
      <div className="inner-wrap">
        <div className='flex items-center justify-center'>
          <div className='w-full container mx-auto'>
            <TextComponent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}