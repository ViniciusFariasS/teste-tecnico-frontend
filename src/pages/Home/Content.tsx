import { FormProvider, useForm } from "react-hook-form"
import { EInputType, ISelectOption } from "../../components/Input/Input.interface";
import { Input } from "../../components/Input/Input";
import { HOME } from "./Home.style";
import { Row } from "../../components/Row/Row";
import { Button } from "../../components/Button/Button";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { getCountriesService, getSeasosService } from "../../services/football.service";
import { AxiosRequestConfig } from "axios";

const Home = () => {
    const [countries, setCountries] = useState<Array<ISelectOption>>([]);
    const [seasons, setSeasons] = useState<Array<ISelectOption>>([]);
    const methods = useForm();
    const { handleSubmit } = methods;

    const onSubmit = () => {

    }

    const config: AxiosRequestConfig = {
        headers: {
            "x-apisports-key": "6b2def9ea3036eafc6fcd383540cff95"
        }
    }

    useEffect(() => {
        getCountriesService(config)
            .then(res => {
                const newData = res.data.response.map((countrie: any) => ({
                    id: countrie.code,
                    name: countrie.name
                }));

                setCountries(newData);
            });

        getSeasosService(config)
            .then(res => {
                const newData = res.data.response.map((season: any) => ({
                    id: season,
                    name: season
                }));

                
                setSeasons(newData);
            })
    }, [])



    return (
        <HOME>
            <div className="home__filter">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                            <Grid item md={3} xs={8} xl={3} >
                                <Input label={"País"} required={false} name="key" type={EInputType.Select} options={countries} />
                            </Grid>
                            <Grid item md={3} xs={8} xl={3}>
                                <Input label={"Temporada"} required={true} name="season" type={EInputType.Select} options={seasons}/>
                            </Grid>
                            <Grid item md={3} xs={8} xl={3}>
                                <Input label={"Liga"} required={true} name="league" type={EInputType.Select} />
                            </Grid>
                            <Grid item md={3} xs={8} xl={3}>
                                <Input label={"Time"} required={true} name="team" type={EInputType.Select} />
                            </Grid>
                            <Grid item md={12} xs={12} xl={12}>
                                <Button type="onSubmit" width="40px" color="#38518F" >
                                    <FilterAltIcon color="inherit" />
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </FormProvider>
            </div>
        </HOME>
    )
}

export {
    Home as HomePage
}