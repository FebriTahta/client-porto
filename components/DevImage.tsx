import Image from 'next/image'

type imageProps = {
    src: string;
};

const DevImage = ({src}:imageProps) => {
  return (
    <>
        <Image 
            src={src}
            alt="Profile Dark"
            fill
            priority
            className="object-cover rounded-full"
        />
    </>
  )
}

export default DevImage