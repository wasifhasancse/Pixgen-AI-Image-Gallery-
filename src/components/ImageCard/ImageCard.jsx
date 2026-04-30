import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

const ImageCard = ({ imageData }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={imageData.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={imageData.title}
          className="object-cover rounded-xl"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {imageData.category}
        </Chip>
      </div>

      <div>
        <h2 className="font-medium">{imageData.title}</h2>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{imageData.likes}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <p>
            <BiDownload />
          </p>
          <p>{imageData.downloads}</p>
        </div>
      </div>

      <Link href={`/all-photos/${imageData.id}`}>
        {" "}
        <Button variant="outline" className={"w-full"}>
          View
        </Button>
      </Link>
    </Card>
  );
};

export default ImageCard;
