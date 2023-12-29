<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView} from 'vue-router';
import MenuItem from './components/MenuItem.vue';

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

let openMenu = ref(false)
</script>

<template>
	<div>
		<div
		class="w-[calc(100%-240px)]
			h-[60px]
			fixed
			right-0
			z-20
			bg-[#101010]
			bg-opacity-80
			flex
			items-center
			justify-between"
		>
			<div class="flex items-center-ml-6">
				<button type="button" 
					class="rounded-full bg-black p-[1px] cursor-pointer ml-3"
				>
					<ChevronLeft fillColor="#FFF" :size="30" />
				</button>
				<button type="button" 
					class="rounded-full bg-black p-[1px] cursor-pointer ml-2"
				>
					<ChevronRight fillColor="#FFF" :size="30" />
				</button>
			</div>

			<button 
				@click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
				class="bg-black hover:bg-[#282828] rounded-full p-1 mr-8 cursor-pointer">
				<div class="flex items-center">
					<img
						class="rounded-full"
						width="27"
						src="https://yt3.ggpht.com/yti/AGOGRCpnXyuTyVE925dWoJ_p2TCZATfLR3Ca5aGPY_On=s88-c-k-c0x00ffffff-no-rj"
					>

					<div class="text-white text-[14px] ml-2 font-semibold">Hermann</div>

					<ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFF" :size="25" />
					<ChevronUp v-else @click="openMenu = false" fillColor="#FFF" :size="25" />
				</div>
			</button>

			<span
				v-if="openMenu"
				class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[50px] right-[23px] p-1 cursor-pointer"
			>
				<ul class="text-gray-200 font-semibold text-[14px]">
					<li class="px-3 py-3 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>	
					<li class="px-3 py-3 hover:bg-[#3E3D3D]">Log Out</li>	
				</ul>
			</span>
		</div>

		<div
			id="sideNav"
			class="h-[100%] p-6 fixed z-50 bg-black w-[240px]"
		>
			<RouterLink to="/">
				<div class="flex flex-row gap-2 align-middle">
					<img
						src="./assets/img/spotifry-logo.png"
						width="35"
						alt="logo"
						class="text-white"
					>
					<span class="text-white font-semibold text-[1.6em]">SPOTIFRY</span>
				</div>
			</RouterLink>

			<div class="my-8"></div>
			
			<ul>
				<RouterLink to="/">
					<MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
				</RouterLink>

				<RouterLink to="/search">
					<MenuItem class="ml-[1px]" :iconSize="24" name="Search" iconString="search" pageUrl="/search" />
				</RouterLink>
				
				<RouterLink to="/library">
					<MenuItem class="ml-[2px]" :iconSize="23" name="Library" iconString="library" pageUrl="/library" />
				</RouterLink>
				
				<div class="py-4"></div>
				
				<MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="playlist" />
				<MenuItem class="-ml-[1px]" :iconSize="27" name="Liked Songs" iconString="liked" pageUrl="/liked" />
			</ul>
			
			<div class="border-b border-b-gray-700"></div>
			
			<ul>
				<li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Playlist #1</li>
				<li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Playlist #2</li>
				<li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Playlist #3</li>
				<li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Playlist #4</li>
				<li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Playlist #5</li>
			</ul>
		</div>

		<div
			class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black"
		>
			<div class="mt-[70px]"></div>
			<RouterView />
			<div class="mb-[100px]"></div>
		</div>
	</div>
</template>
