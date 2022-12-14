import Image from 'next/image';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

export default function ProFile() {
	return (
		<ProFileBox>
			<ProfileImage>
				<Image
					rel="img"
					src="/profile.JPG"
					alt="프로필"
					width={90}
					height={95}
				/>
			</ProfileImage>
			<p> Front-End</p>
			<p> 성장하는 프론트엔드 개발자</p>
			<IConBox>
				{/* <Link> */}
				<Icon>
					<Image
						rel="img"
						src="/call.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				{/* </Link> */}
				{/* <Link> */}
				<Icon>
					<Image
						rel="img"
						src="/messenger.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				{/* </Link> */}
				{/* <Link> */}
				<Icon>
					<Image
						rel="img"
						src="/install.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				{/* </Link> */}

				<Icon>
					<a
						href="https://github.com/Gitseong96?tab=repositories"
						target="_blank"
					>
						<Image
							rel="img"
							src="/git.png"
							alt="gitHub"
							width={24}
							height={24}
						/>
					</a>
				</Icon>
			</IConBox>
		</ProFileBox>
	);
}
const shake = keyframes`{
0% ,100% {
	transform : translate3d(-1px ,1px ,0);
}
20% , 80% {
	transform : translate3d(0 ,2px , 0)
}

40% , 60% {
	transform: translate3d(0,0,2px);
}
}`;

const ProFileBox = styled.div`
	background-color: ${({ theme }) => theme.notice.themes.header};
	border: 0.1rem solid;
	border-color: whitesmoke;
	border-radius: 1.2rem;
	display: flex;
	flex-direction: column;
	text-align: center;

	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	@media ${({ theme }) => theme.theme.device.mobile} {
		height: 200px;
		width: 75%;
		margin: 0 5% 0 5%;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		position: sticky;
		top: 9rem;
		right: 0;
		width: 30%;
		/* margin-right: 19px; */
		margin: 5% 1rem 0 1rem;
	}

	@media ${({ theme }) => theme.theme.device.laptop} {
		position: sticky;
		top: 9rem;
		right: 2%;
		width: 23%;
		margin: 5% 1rem 0 1rem;
		max-width: 380px;
		/* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
			rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
	}
`;

const ProfileImage = styled.span`
	width: 8rem;
	height: 9rem;
	margin: auto;
	margin-top: 1rem;

	> span {
		border-radius: 40%;
	}
`;
const IConBox = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 4fr);
`;
const Icon = styled.span`
	margin: 0.5rem 0.5rem 0.5rem 0.5rem;
	&:hover {
		animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}
`;
