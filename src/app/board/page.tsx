"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  DoubleArrowDownIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BoardPage() {
  const router = useRouter();

  return (
    <>
      <MaxWidthWrapper className="py-10 px-8">
        <div>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() => {
              router.back();
            }}
          >
            <ChevronLeftIcon />
          </Button>
        </div>
        <div className="flex flex-row items-center justify-center w-full my-8 text-justify">
          <h3 className="text-3xl font-semibold">
            <span className="underline">Game Components</span>
          </h3>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">
            <span className="underline">Game Board</span> 🎲
          </h2>
          <div className="relative w-full h-[500px]">
            <Image
              src="/board_img.jpg"
              alt="Board Image"
              fill
              className="rounded shadow-lg shadow-gray-600"
            />
          </div>
          <div className="mt-6 justify-end w-full flex flex-row gap-4">
            <Link href="/board_img.jpg" target="_blank">
              <Button variant={"secondary"} className="gap-2">
                <DownloadIcon />
                Download Image
              </Button>
            </Link>
            <Link href="/board.pdf" target="_blank">
              <Button variant={"secondary"} className="gap-2">
                <DownloadIcon />
                Download PDF
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">
            <span className="underline">Game Characters</span> 👤
          </h2>
          <div className="relative w-full h-[500px]">
            <Image
              src="/characters.jpg"
              alt="Characters Image"
              fill
              className="rounded shadow-lg shadow-gray-600"
            />
          </div>
          <div className="mt-6 justify-end w-full flex flex-row gap-4">
            <Link href="/characters.jpg" target="_blank">
              <Button variant={"secondary"} className="gap-2">
                <DownloadIcon />
                Download Image
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">
            <span className="underline">Territory Cards</span> 🎴
          </h2>
          <div className="relative w-full h-[900px]">
            <Image
              src="/territories.jpg"
              alt="Territories Image"
              fill
              className="rounded shadow-lg shadow-gray-600"
            />
          </div>
          <div className="mt-6 justify-end w-full flex flex-row gap-4">
            <Link href="/territories.jpg" target="_blank">
              <Button variant={"secondary"} className="gap-2">
                <DownloadIcon />
                Download Image
              </Button>
            </Link>
            <Link href={"/territories.pdf"} target="_blank">
              <Button variant={"secondary"} className="gap-2">
                <DownloadIcon />
                Download PDF
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">
            <span className="underline">Key</span> 🔑
          </h2>
          <div className="relative w-full h-[900px]">
            <Image
              src="/key.jpg"
              alt="Territories Image"
              fill
              className="rounded shadow-lg shadow-gray-600"
            />
          </div>
          <div className="mt-6 justify-end w-full flex flex-row gap-4">
            <Link href="/key.jpg" target="_blank">
              <Button variant={"secondary"} className="gap-2">
                <DownloadIcon />
                Download Image
              </Button>
            </Link>
            <Link href={"/key.pdf"} target="_blank">
              <Button variant={"secondary"} className="gap-2">
                <DownloadIcon />
                Download PDF
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">
            <span className="underline">Gallery</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-[600px]">
              <Image
                src="/game-1.jpg"
                alt="Territories Image"
                fill
                className="rounded shadow-lg shadow-gray-600"
              />
            </div>
            <div className="relative w-full h-[600px]">
              <Image
                src="/game-2.jpg"
                alt="Territories Image"
                fill
                className="rounded shadow-lg shadow-gray-600"
              />
            </div>
          </div>
          <div className="mt-8 rounded border shadow-md">
            <video controls className="w-full aspect-video">
              <source src="/panorama.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
