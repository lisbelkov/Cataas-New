import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { textAlign } from '@mui/system';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';



const TableCat = () => {


    const modelItem = (item) => {
        console.log(item);

        if (item) {
            console.log(item, ' item')
            setInfo(item.boss);
            setTel(item.tel);
            setOpen(true);
        }
    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const [data, setData] = useState([
        { id: 1, name: 'Tosha', age: '6', gender: 'boy', boss: 'John', tel: 80291111111 },
        { id: 2, name: 'Murka', age: '20', gender: 'girl', boss: 'Maria', tel: 8029000000 },
        { id: 3, name: 'Musia', age: '5', gender: 'girl', boss: 'Liza', tel: 80292222222 },
        { id: 4, name: 'Basia', age: '1', gender: 'girl', boss: 'Alex', tel: 80293333333 },
        { id: 5, name: 'Tihon', age: '3', gender: 'boy', boss: 'Ivan', tel: 80295555555 },
        { id: 6, name: 'Barsik', age: '4', gender: 'boy', boss: 'Sara', tel: 80291234567 },
        { id: 7, name: 'Vasia', age: '10', gender: 'girl', boss: 'Mihail', tel: 80297654321 },
        { id: 8, name: 'Mursik', age: '12', gender: 'boy', boss: 'Tania', tel: 80292345671 },
        { id: 9, name: 'Topa', age: '0', gender: 'girl', boss: 'Oleg', tel: 80293214567 },
        { id: 10, name: 'Taison', age: '7', gender: 'boy', boss: 'Misha', tel: 8029657321 },
        { id: 11, name: 'Lulu', age: '8', gender: 'girl', boss: 'Ruslan', tel: 80299632587 },
        { id: 12, name: 'Maison', age: '11', gender: 'uncertain', boss: 'Lena', tel: 80291478523 },
        { id: 13, name: 'Bobi', age: '16', gender: 'girl', boss: 'Inna', tel: 80296547893 },
        { id: 14, name: 'Pushok', age: '2', gender: 'boy', boss: 'Vitya', tel: 80295698741 },
        { id: 15, name: 'Lapka', age: '5', gender: 'uncertain', boss: 'Vadim', tel: 80291234567 },
    ]);

    const [valueAge, setValueAge] = useState([
        // { id: 1, value: 'id', label: 'id' },
        { id: 2, value: 'name', label: 'name' },
        { id: 3, value: 'age', label: 'age' },
        { id: 4, value: 'gender', label: 'gender' },
    ]);

    const [valueGender, setValueGender] = useState([
        { id: 1, value: 'boy', label: 'boy' },
        { id: 2, value: 'girl', label: 'girl' },
        { id: 3, value: 'uncertain', label: 'uncertain' },
    ]);

    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState([]);
    const [tel, setTel] = useState([]);
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('ASC');
    const [valueSelect, setValueSelect] = useState('name');
    const [text, setText] = useState('');
    const [add, setAdd] = useState(false);
    const [newNameCat, setNewNameCat] = useState('');
    const [newAgeCat, setNewAgeCat] = useState(0);
    const [newGenderCat, setNewGenderCat] = useState('');
    const [newOwnerCat, setNewOwnerCat] = useState('');
    const [newTelOwnerCat, setNewTelOwnerCat] = useState('');
    const [genderSelect, setGenderSelect] = useState('gender');
    const [newNameCatError, setNewNameCatError] = useState(false)
    const [newAgeCatError, setNewAgeCatError] = useState(false)
    const [newOwnerCatError, setNewOwnerCatError] = useState(false)
    const [newTelOwnerCatError, setNewTelOwnerCatError] = useState(false)


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCloseCat = () => setAdd(false);



    /*сортировка*/
    const filterData = data.filter(item => {
        return item[`${valueSelect}`]?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    });

    /*сортировка*/


    /*select*/
    const handleChange = (event) => {
        setValueSelect(event.target.value);
    };
    /*end select*/

    /*select 2*/
    const genderHandleChange = (event) => {
        setGenderSelect(event.target.value);
    };

    /*end select 2*/


    /*сортировка*/
    const sorting = (col) => {
        if (order === 'ASC') {
            const sorted = [...data].sort((a, b) => {
                return a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1;
            })

            setData(sorted)
            setOrder('DSC')
        }

        if (order === 'DSC') {
            const sorted = [...data].sort((a, b) => {
                return a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1;
            })

            setData(sorted)
            setOrder('ASC')
        }
    };
    /* конец сортировки */



    /*редактирование добавление удаление*/

    /* Add newCat*/

    const addNewCat = () => {
        if (newNameCat.trim().length &&
            newAgeCat.trim().length &&
            newGenderCat.trim().length &&
            newOwnerCat.trim().length &&
            newTelOwnerCat.trim().length) {
            setData([

                ...data,
                {
                    id: data.length + 1,
                    name: newNameCat,
                    age: newAgeCat,
                    gender: newGenderCat,
                    boss: newOwnerCat,
                    tel: newTelOwnerCat
                }
            ])
            setAdd(false);
            setNewNameCat('');
            setNewAgeCat('');
            setNewGenderCat('');
            setNewOwnerCat('');
            setNewTelOwnerCat('');
        }
        // if (newAgeCat >= 40 || !newNameCat.trim().length) {
        //     setNewAgeCatError(true)
        // } else {
        //     setNewNameCatError(true);
        //     setNewAgeCatError(false);
        //     setNewOwnerCatError(true);
        //     setNewTelOwnerCatError(true);
        // }

        if (newAgeCat >= 40) {
            prompt("Укажите возраст Вашего кота еще раз?");
            console.log(prompt);

            // alert("Проверьте возраст кота!");

            setNewAgeCatError(true)
        } else if (newNameCat = "^[A-Za-zА-Яа-яЁё\s]{20}") {
            setNewNameCatError(true);
            setNewAgeCatError(false);
            setNewOwnerCatError(true);
            setNewTelOwnerCatError(true);
        }
    }


    console.log(newAgeCatError, 'newAgeCat')

    /* End Add new cat*/
    /*Delete Cat*/
    const deleteCat = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    /*End Delete Cat*/


    /*конец редактирование добавление удаление*/
    /*проверка возвраста кота*/
    // const age = 10;
    // if (age >= 40) {
    //     alert('Проверьте введенный возраст!');
    // } else if  (age >= 30) {
    //     alert('Ваш кот долгожитель!');
    // }
    // else if  (age >= 20) {
    //     alert('Для кота этого достаточно!');
    // } else (age >= 10) {
    //     alert('Ваш кот совсем молод!');
    // }


    /*конец проверки возвраста кота*/

    return (
        <div>
            <div>
                {/* <Button onClick={handleOpen}></Button> */}

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2"  >
                        {info ? info : ''}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {tel ? tel : ''}
                    </Typography>
                </Box>
            </Modal>


            <Container>
                <Form className='d-flex'>
                    <Box sx={{ m: 1, minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type Search</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={valueSelect || ''}
                                label="Type Search"
                                onChange={handleChange}
                            >
                                {
                                    valueAge.map((item, index) => {
                                        return (
                                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                        )
                                    })
                                }

                            </Select>
                        </FormControl>
                    </Box>

                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        sx={{ m: 1, minWidth: 800 }}
                        onChange={e => setSearch(e.target.value)}
                    />

                    <div>
                        <div>
                            <Button
                                onClick={() => setAdd(true)}
                                sx={{ m: 1, minWidth: 120 }}>Add new cat</Button>
                        </div>

                        <Modal
                            open={add}
                            onClose={handleCloseCat}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <Box
                                sx={style}
                            >
                                <TextField
                                    autoFocus
                                    error={newNameCatError}
                                    // error={false}
                                    type="text"
                                    // pattern="[a-zA-Z]+"
                                    // oninput="this.value=this.value.replace(/[^a-zA-Z]/g,'' )"
                                    // pattern="^[A-Za-zА-Яа-яЁё\s]{20}"
                                    // error={typeof 'newNameCat' !== 'string' ? true : false}      

                                    helperText="Incorrect entry."
                                    id="filled-basic"
                                    label="Cat Name"
                                    variant="filled"
                                    value={newNameCat}
                                    onChange={e => setNewNameCat(e.target.value)}
                                    sx={{ m: 1 }}
                                >
                                    { }
                                    Cat Name
                                </TextField>
                                <TextField
                                    error={newAgeCatError}
                                    type="number"
                                    pattern="[\+]375\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                                    helperText="Incorrect entry."
                                    id="filled-basic"
                                    label="Cat Age"
                                    variant="filled"
                                    value={newAgeCat}


                                    onChange={e => setNewAgeCat(e.target.value)} sx={{ m: 1 }}>Cat Age</TextField>

                                <div>

                                    <InputLabel id="demo-simple-select-label">Gender new Cat</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={newGenderCat || ''}
                                        label="Gender new Cat"

                                        // onChange={genderHandleChange}
                                        onChange={e => setNewGenderCat(e.target.value)} sx={{ m: 1, minWidth: 221 }}

                                    >
                                        {
                                            valueGender.map((item, index) => {
                                                return (
                                                    <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                                )
                                            })
                                        }

                                    </Select>
                                </div>


                                <TextField
                                    error={newOwnerCatError}
                                    // error={typeof (newOwnerCat) !== 'string' ? true : false}
                                    oninput="this.value=this.value.replace(/[^a-zA-Z]/g,'');"
                                    helperText="Incorrect entry."
                                    id="filled-basic"
                                    typeof='strong'
                                    label="Name Owner"
                                    variant="filled"
                                    value={newOwnerCat}
                                    onChange={e => setNewOwnerCat(e.target.value)} sx={{ m: 1 }}>Boss</TextField>

                                <TextField
                                    error={newTelOwnerCatError}
                                    // error={typeof (newTelOwnerCat) !== 'number' ? true : false}
                                    helperText="Incorrect entry."
                                    id="filled-basic"
                                    label="Tel Owner"
                                    variant="filled"
                                    type="phone"
                                    pattern="[\+]375\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                                    value={newTelOwnerCat}
                                    onChange={e => setNewTelOwnerCat(e.target.value)} sx={{ m: 1 }}>Tel:</TextField>

                                <Button variant="outlined"
                                    onClick={addNewCat}
                                    sx={{ m: 1 }}

                                >Add new Cat</Button>
                                {/* <Button variant="outlined" sx={{ m: 1 }}>Cancel</Button> */}

                            </Box>

                        </Modal>
                    </div>
                </Form>
            </Container>


            <Table striped bordered hover variant="Light"  >
                <thead>
                    <tr>
                        <th onClick={() => sorting('id')}>№</th>
                        <th onClick={() => sorting('name')}>Cat Name</th>
                        <th onClick={() => sorting('age')}>Cat Age</th>
                        <th onClick={() => sorting('gender')}>Gender</th>
                        <th>Click to contact the owner</th>
                        <th align="center" colSpan={2}>Delete this Cate</th>
                    </tr>
                </thead>
                <tbody>

                    {filterData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td >{item.id}</td>
                                <td >{item.name}</td>
                                <td >{item.age}</td>
                                <td >{item.gender}</td>
                                <td >
                                    <button
                                        class="btn btn-warning"
                                        onClick={() => modelItem(item)}>
                                        Owner Information
                                    </button>
                                </td>
                                {/* <td >

                                    <Fab size="small" color="default" aria-label="edit">
                                        <EditIcon fontSize="inherit" />
                                    </Fab>

                                </td> */}
                                <td >
                                    <Button onClick={() => deleteCat(item.id)}>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <IconButton aria-label="delete" size="large">
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>
                                        </Stack>
                                    </Button>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}


export default TableCat;