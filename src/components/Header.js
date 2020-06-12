import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OpenMenu from '../components/OpenMenu';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';

const Wrapper = styled.div`
    line-height: 80px;
		text-align: right;
		position: absolute;
		width: 100%;

    p {
        float: right;
        font-family: Georgia;
        font-size: 25px;
        font-weight: 600;
        color: #FFF;
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

const Header = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}) ;
	return (
	<Wrapper>
		{width < 900 ? 
		(<>
			<StyledMenuOpenOutlinedIcon 
				fontSize="large"
				color="secondary"
				onClick={() => setIsDrawerOpen(true)}
				/>
			<OpenMenu
				openDrawer={isDrawerOpen}
				setClose={() => setIsDrawerOpen(false)}/>
		</>
			) : (
			<>
			<p>Photography</p>
			<p>Projects</p>
			<p>Experience</p>
			<p>About</p>
			</>
			)}		 
	</Wrapper>
	)
}

export default Header;