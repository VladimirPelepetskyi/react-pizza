import {FC} from 'react'
import ContentLoader from 'react-content-loader'

export const SkeletonPizzaBlock: FC = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={460}
    viewBox='0 0 280 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='130' cy='130' r='130' />
    <rect x='-2' y='280' rx='10' ry='10' width='280' height='25' />
    <rect x='0' y='424' rx='10' ry='10' width='90' height='27' />
    <rect x='131' y='413' rx='30' ry='30' width='150' height='45' />
    <circle cx='140' cy='140' r='130' />
    <rect x='1' y='320' rx='10' ry='10' width='280' height='80' />
  </ContentLoader>
)
