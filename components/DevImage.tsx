import Image from 'next/image'

type imageProps = {
    src: string;
};

const DevImage = ({src}:imageProps) => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden' }}>
    <Image 
        src={src}
        alt="Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        priority
        className="object-cover rounded-full"
    />
</div>

  )
}

export default DevImage