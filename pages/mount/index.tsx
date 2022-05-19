import {NextPage} from "next";
import React, {ReactNode, useEffect, useState} from "react";
import {IMount} from "../../utils/types/Mount.t";
import {Box, Button, Center, SimpleGrid, Spinner} from "@chakra-ui/react";
import MountComponent from "../../components/GrindSection/MountComponet";
import {fetcher, useMount, useMounts, useSlicedMounts} from "../../utils/hooks/useMounts";
import MountModal from "../../components/Mount/MountModal";
import Header from "../../components/Header/Header";
import Background from "../../components/Layout/Background";
import InfiniteScroll from "react-infinite-scroll-component";
import {end} from "@popperjs/core";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useRouter} from "next/router";
import {setCharacter} from "../../components/Character/CharacterSlice";
import {ICharacter} from "../../utils/types/Character.t";
import Loader from "../../components/Layout/Loader";

const Index: NextPage = () => {
	const [startCounter, setStartCounter] = useState(0);
	const [endCounter, setEndCounter] = useState(40);

	const {mounts, isLoading, isError} = useSlicedMounts(0, endCounter);

	const perPage = 3;
	const [lastObjectPos, setLastObjectPos] = useState(0);
	const [loadedMounts, setLoadedMounts] = useState<IMount[]>();
	const character = useAppSelector(state => state.character);
	const dispatch = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		const existingUser = localStorage.getItem("user");
		if (!existingUser) {
			router.push("/");
			return;
		}
		const user: ICharacter = existingUser ? JSON.parse(existingUser) : undefined;
		dispatch(setCharacter(user));
	}, [dispatch, router])

	if (isError) return <h1>No mounts found</h1>

	return (
		<>
			<Header/>
			<Background>
				{isLoading && <Loader/>}
				{mounts ?
					<>
						<InfiniteScroll next={() => setEndCounter(endCounter + 20)}
										hasMore={endCounter <= mounts.length} loader={<Spinner/>}
										dataLength={mounts?.length}>
							<SimpleGrid columns={{base: 2, sm: 2, md: 3, lg: 4, xl: 5}} spacing={20}>
								{mounts?.map((mount, key) => (
									<MountComponent key={key} mount={mount}/>
								))}
							</SimpleGrid>
						</InfiniteScroll>
						<MountModal/>
					</>
					: null}
			</Background>
		</>
	)
}

export default Index