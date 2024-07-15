import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Content = [
  {
    id: "3fsdc2e",
    title: "Spread Happiness Foundation express gratitude to CM Naveen Patnaik",
    link: "https://www.figma.com/design/aWa6qTrmlGPJhqp2pniG3i/YoM?node-id=2534-3&t=MzUeMkyLcdKG4hwo-0",
    dueDate: new Date(2024, 6, 24),
  },
  {
    id: "3fsdcasda",
    title: "Spread Happiness Foundation express gratitude to CM Naveen Patnaik",
    link: "https://www.figma.com/design/aWa6qTrmlGPJhqp2pniG3i/YoM?node-id=2534-3&t=MzUeMkyLcdKG4hwo-0",
    dueDate: new Date(2024, 6, 24),
  },
  {
    id: "3fsdccai9",
    title: "Spread Happiness Foundation express gratitude to CM Naveen Patnaik",
    link: "https://www.figma.com/design/aWa6qTrmlGPJhqp2pniG3i/YoM?node-id=2534-3&t=MzUeMkyLcdKG4hwo-0",
    dueDate: new Date(2024, 6, 24),
  },
  {
    id: "93nd932",
    title: "Spread Happiness Foundation express gratitude to CM Naveen Patnaik",
    link: "https://www.figma.com/design/aWa6qTrmlGPJhqp2pniG3i/YoM?node-id=2534-3&t=MzUeMkyLcdKG4hwo-0",
    dueDate: new Date(2024, 6, 24),
  },
  {
    id: "3fsdc2e",
    title: "Spread Happiness Foundation express gratitude to CM Naveen Patnaik",
    link: "https://www.figma.com/design/aWa6qTrmlGPJhqp2pniG3i/YoM?node-id=2534-3&t=MzUeMkyLcdKG4hwo-0",
    dueDate: new Date(2024, 6, 24),
  },
];

export function Tables() {
  const date_toString = (today:Date) => {
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Months are zero-indexed
    const day = today.getDate();
    
    const dateString = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    return dateString;
  }
  return (
    <div className=" m-5 rounded-md border-2 border-black md:mx-20">
    <Table className="m-0 p-0 ">
      
      <TableHeader className="p-0 m-0">
        <TableRow className="bg-[#3B3A63] rounded-2xl text-white hover:bg-blue-950">
          <TableHead className=" text-center text-white border-r-2 border-black">Title</TableHead>

          <TableHead className="text-center  text-white min-w-3 max-w-4 ">Due Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="p-0 m-0">
        {Content.map((data,index) => (

          <TableRow key={data.id} className={`p-0 m-0 hover:bg-slate-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
            <TableCell className="font-medium border-r-2 border-black">
              <a href={data.link}>{data.title}</a>
            </TableCell>

            <TableCell className="text-nowrap text-center ">
              {date_toString(data.dueDate)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
    </Table>
    </div>
  );
}

