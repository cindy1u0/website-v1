import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OpenMenu from '../components/OpenMenu';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import { Link } from "react-scroll";

const Wrapper = styled.div`
		background-color: #BAE9EB;
    line-height: 80px;
		text-align: right;
		position: fixed;
		width: 100%;
		z-index: 10;

    p {
        float: right;
        font-family: Georgia;
        font-size: 25px;
        font-weight: 600;
        color: #303C6C;
        margin: 0 35px;

        :hover {
            cursor: pointer;
						text-decoration: underline;
        }
    }
`;

const StyledMenuOpenOutlinedIcon = styled(MenuOpenOutlinedIcon)`
	cursor: pointer;
  margin: 30px 30px 0 0;
`;

const Head = styled.div`
	span {
		color: #303C6C;
		cursor: pointer;
		float: left;
		font-family: Courier;
		font-size: 25px;
		font-weight: 600;
		margin-left: 50px;
	}
`;

const Container = styled.div`
	span {
		color: #f50057;
		cursor: pointer;
		float: left;
		font-family: Courier;
		font-size: 25px;
		font-weight: 600;
		margin-left: 50px;
	}
`;

const Header = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
	<Wrapper>
		{width < 900 ? 
		(<Container>
			<Link smooth={true} hashSpy={true} to='home'><span>CL</span></Link>
			<StyledMenuOpenOutlinedIcon 
				fontSize="large"
				color="secondary"
				onClick={() => setIsDrawerOpen(true)}
				/>
			<OpenMenu
				openDrawer={isDrawerOpen}
				setClose={() => setIsDrawerOpen(false)}/>
		</Container>
			) : (
			<Head>
				<Link smooth={true} hashSpy={true} to='photography'><p>Photography</p></Link>
				<Link smooth={true} hashSpy={true} to='projects'><p>Projects</p></Link>
				<Link smooth={true} hashSpy={true} to='experience'><p>Experience</p></Link>
				<Link smooth={true} hashSpy={true} to='about'><p>About</p></Link>
				<Link smooth={true} hashSpy={true} to='home'><span>CL</span></Link>
			</Head>
			)}		 
	</Wrapper>
	)
}

export default Header;