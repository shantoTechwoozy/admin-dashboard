
'use client'
import { DotsThreeOutlineVertical, Funnel, Plus } from 'phosphor-react'
import {
    Badge,
    Button,
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownItem,
    DropdownList,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'keep-react'
import { nanoid } from 'nanoid'
import TableWrap from '@/components/common/table/TableWrap'
import TableContainer from '../common/table/TableContainer'
interface PropsTypes {
    tableTitle: string;
    headerItems: string[];
    data: any;
}
export const KeepTable: React.FC<PropsTypes> = ({ tableTitle, headerItems, data }) => {
    return (
        <TableContainer>
            <TableWrap >
                <Table className="table-auto">
                    <TableCaption>
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-5">
                                <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">{tableTitle}</h2>
                                <Badge className="dark:bg-metal-800 dark:text-white">
                                    {data.length}
                                </Badge>
                            </div>
                            <div className="flex items-center gap-5">
                                <Button variant="outline" className="flex gap-1.5">
                                    <Plus className="size-4 fill-metal-900 dark:fill-white" />
                                    Add Data
                                </Button>
                                <Button variant="outline" className="flex gap-1.5">
                                    <Funnel className="size-4 fill-metal-900 dark:fill-white" />
                                    Filter Data
                                </Button>
                            </div>
                        </div>
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            {headerItems.map((item: string) =>
                                <TableHead key={nanoid()}>
                                    <div className="w-[110px]">{item}</div>
                                </TableHead>)}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item: any) => (
                            <TableRow key={nanoid()}>
                                {Object.keys(item).map((key) => (
                                    <TableCell key={key}>{item[key]}</TableCell>
                                ))}
                                <TableCell>
                                    <Dropdown>
                                        <DropdownAction asChild>
                                            <button>
                                                <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                                            </button>
                                        </DropdownAction>
                                        <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
                                            <DropdownList>
                                                <DropdownItem>Edit</DropdownItem>
                                                <DropdownItem>Move</DropdownItem>
                                                <DropdownItem>Delete</DropdownItem>
                                            </DropdownList>
                                        </DropdownContent>
                                    </Dropdown>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableWrap>
        </TableContainer>
    )
}

