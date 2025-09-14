import Image from "next/image"

type Props = {
  title: string
  description: string
  image: string
  logo: string
}

export default function EditionCard({ title, description, image, logo }: Readonly<Props>) {
  return (
    <div className="group w-full max-w-sm h-96 [perspective:1000px] z-40">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-3xl overflow-hidden shadow-lg border border-[#bd0060]/10">
          <div className="relative overflow-hidden h-64">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#541d36]/60 via-transparent to-transparent" />

          </div>
                      <div className="absolute bottom-4 right-4 ">
              <Image src={logo || "/placeholder.svg"} alt={title} width={32} height={32}   className="brightness-0 invert-0 opacity-75" />
            </div>
          <div className="p-8 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-[#bd0060]">{title}</h3>
              <div className="w-12 h-0.5 bg-zinc-700 rounded-full" />
            </div>
            <p className="text-[#541d36]/80 -mt-4 text-sm font-light">Hover to read description</p>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#bd0060] to-[#7b42ce] rounded-3xl overflow-hidden shadow-lg border border-[#bd0060]/20">
          <div className="p-8 h-full flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Image src={logo || "/placeholder.svg"} alt={title} width={40} height={40} className="opacity-90" />
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white">{title}</h3>
              </div>
              <div className="w-12 h-0.5 bg-white/60 rounded-full" />
            </div>
            <p className="text-white/90 leading-relaxed text-sm font-light overflow-y-auto">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}