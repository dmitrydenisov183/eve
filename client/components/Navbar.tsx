import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
    && {
        background-color: #050610;
        height: 57px;
        border: 1px solid #333;
        & > div {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        & button {
            background-color: inherit;
            border: none;
        }
        & svg {
            width: 24px;
            height: 24px;
            color: #fff;
        }
    }
`

const StyledLogo = styled.div`
    cursor: pointer;
    margin-top: 6px;
`

const AppNavbar: FC = () => {
    return (
        <StyledNavbar>
            <div>
                <button>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <Link href="/">
                    <StyledLogo>
                        <Image
                            src="/eve.svg"
                            alt="EVE Logo"
                            width={72}
                            height={28}
                        />
                    </StyledLogo>
                </Link>

                <button>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </StyledNavbar>
    )
}

export default AppNavbar
