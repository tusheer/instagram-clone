import React from 'react';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Gear from '../image/gear.png';
import Dialogg from './Dialog';
import ProfileInner from './ProfileInner.js';
const Head = styled.div`
	font-family: 'Hind Siliguri', sans-serif;
	display: flex;
	margin: 44px;
	.head1 {
		width: 30.33%;
		height: 150px;

		.img {
			width: 150px;
			height: 150px;
			overflow: hidden;
			border-radius: 50%;
			img {
				height: 100%;
				width: 100%;
			}
		}
	}
	.head2 {
		width: 63.66%;
		height: 150px;

		.name1 {
			display: flex;
			align-items: center;
			margin-bottom: 16px;
			h1 {
				font-weight: 200;
				line-height: 40px;
				font-size: 24px;
				color: #262626;
				margin-right: 13px;
			}
			button {
				color: #494848;
				background: white;
				padding: 6px 8px;
				font-weight: bold;
				outline: none;
				border-radius: 5px;
				border: 1px solid #ddd;
				font-size: 14px;
				line-height: 10px;
				height: 30px;
				cursor: pointer;
				margin-right: 13px;
				:active {
					opacity: 0.5;
				}
			}
			div {
				height: 25px;
				width: 25px;
				cursor: pointer;
				img {
					height: 100%;
					width: 100%;
				}
			}
		}
		.name2 {
			display: flex;
			align-items: center;
			font-size: 16px;
			margin-bottom: 16px;
			div {
				margin-right: 30px;
				span {
					font-weight: bold;
				}
			}
		}
		.name3 {
			font-weight: bold;
			color: #3f3c3c;
		}
	}
`;
function Profile() {
	const [ open, setOpen ] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};
	return (
		<div>
			<Container maxWidth="md">
				<Head>
					<div className="head1">
						<div className="img">
							<img
								src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQERURExMQFRUSFxEWFhgWFRURFRYVFRYYFxgYGBcaHiggGBolHRMWITEhJikrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy4mICUtNTItMC8tLTAvLS0yMC8tLS0vMC8tLS0tLS8vLy0tLS0tLS0tLS0tLS0tLS0tLy0tLf/AABEIANgA6gMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAD8QAAIBAgIFCQYDCAEFAAAAAAABAgMRBCEFEjFBUQYiYXGBkaGx0RMyQlJywSOS8BQzU2KCk7LhFQc0Q6LC/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEDAgQFBgf/xAA7EQACAQIDBAgFAgQGAwAAAAAAAQIDEQQhMQUSQVEGE2FxgZGhsSIywdHwFFIjM0LhFXKSsuLxQ4LC/9oADAMBAAIRAxEAPwDozI+bAAAAAAAAAAAAHsYt7E31K4JUXJ2SMlSl8st72PZHb3AyVOb4Pjw5a+Ri4Pg+5gjdksrGcqEkruLtx3frIGUqU4q7WRPQwacXKUtXm60Va91dR1pfLG729eQL6WGUouU5buV13XSu+Sz18bWIHh5LWTWcFeWzZdK/Suctm53BQ6M05Jr5c33ZZ+q8M9DNYSWs4uy1UnK7UVFO1rt7HmsgZrDz3nF5W1u0kr21fistbiODm246ucXFNXV05Oy7L2z2ZoBYaq5OKWaaT8dPDt0zQo4SU721duqudFa0uEbvnPqAp4edT5ba21Wb5Lm+4jlSaipbpOS6bx1b3/MgVum1BS5tryt9zLE4Z03aTjfNNKSbTW5rcDOtRlSdpNX5J3t3kQKQAAAAAAAAAAAAAAAAAAAAAAAAAADOjVcHddHg1LzigZwqSg7x/M0/oTrSE7W5u/dve/rFjY/W1bWy8jH9tneTvnO19+xNK1+vy4Cxj+qqb0pJ66+x5PFyaads73y4tv7sWIliakk0+P3v9SSlila0te9tV6tl7SC2QnwtZc5Z2y4AzhXW7ad9LZf1L9su7ms7ZcmRxxTU9ey2W1dkdVrV1bcLZArjiJKpv5crcLWtbut+XMsPjpwlKV29f3s5Rbd73vFpp38wZUsVUpylK997XNq/HVWZ7DHyUpTtFue26cubvjnueSe+yBMcXNTlOyblrfPLis+DyT42PcLpCVNNRWTeslrTVnszs1rKyWT4AmjjJ0U4xWV7rN5PwauuxkLr3goNJ2lKSed+da6e531UCnrb01Bq9ne/fa/ZnYkxWMdSKjZJRbe2UtuVlrN2jlsBZWxLqxUbWS7W/K7dl2GsDWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPJSsrvYsw2krszhCU5KEVdt2Xe8kE75oJpq6InCUJOMlZrJrkegxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5KN0094aurMzp1HTmpx1TTXes0UVWhUo7Jq2dudb/1e84s6VbD33ZZd/wBD6Zhcds7a6i6tC8+N4N2/90tO9ruIHjqj+OXgin9VW/czqLYWzl/4I+VyN4mfzz/NL1MHWqPWT82Xx2XgY/LQh/oj9h+0T+ef5pepCq1F/U/NmUtnYOWTow/0R+xNS0jUj8V+h5+O0uhjK0eN+852J6N7Orq3V7r5xy9NPQtsFpCNTLZLhx6mdPD4uNXJ5P8ANDwu2OjtfALrIvfp8+K/zL66d2hum2eeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJSvkVmL0so5Q5z4/D/s59bHxjlTz7eH9z2GzOiNWslUxT3F+1fN48I+r7EVlXG1JbZPs5vkc6eJqz1l9D2WF2HgMNbq6SvzfxPzd/SxrlJ1dMgQAAAAAep2z4Ep2IlFSTUldM6LRuK9pDP3lk/XtO9hK/Wwz1Wp8k2/sr/D8VaHySzj2c14ezXE2zZOGAAAAAAAAAAAAAAAAAAAAAAAAAAAACi0npDX5kXzd7+b/XmcbF4vrPghp7/wBvc+l9HejywqWJxC/iPRfs/wCXPlpzK40D1oAAAAAAAAAAN/Q1W1S3zJrtWfr3m7gJ7tW3M8x0twyqbPdTjBp+De6/e/gX52z5cAAAAAAAAAAAAAAAAAAAAAAAAAAARYilrxcbtX22224FdWn1kd29jcwGLWErqtuKTWiel+Dy5fnAo8b7KD1YRu1tk5Ssn1XzZx8R1EHuQV3zuz6Vsj/FMTFYjFVN2LzUFGOa5ttNpPle/ajSNM9EAAAAAAAAAACLESsrcTKJjPQywWkqlJ5Ntb4t3X+uw2qWInTeTy5HF2hsXCY2L342lwksmvv3M6rB4qNWCnHftW9PemdilVjUjvI+YY/A1cFXdGrqtHwa4NfmuROWGkAAAAAAAAAAAAAAAAAAAAAAAAauka+pTbW15Lrf6b7DXxVXq6Ta10R2dgYBY3HRhJXivil3Lh4uyObPPn18AAAypwcnaKbfBJt+BKV9A2lqbC0dW/g1v7c/QnclyfkYdZD9y8x/x1b+DW/tz9BuS5PyHWQ/cvM8/wCPrfwq39ufoNyXJ+Q6yH7l5mVPRdeWyjW/JJeLRKhJ8GQ6sFrJG5PkzilDWVNN/LrR1u7Z2XuWKhO17FTxdO9rnO14yUmpJqSyaas11p7DG1sjO98yMAuOTVe1Rw3SV+2P+m+43sDO1Rx5nk+l2GU8JGtxg/R5e9jpTqnzkAAAAAAAAAAAAAAAAAAAAAAAAqNPy9xfU+6y+7OZtKXyrvPd9CaSvWqcfhXu37IqDlHvSfB4SdaahCLlJ9yXFvcjKMXJ2RjOagryOy0XyUp00nV/ElwzUF2fF29xuQw0V82ZzquMlLKOS9S/pU1FWilFcEkl3I2EktDUbbd2ZEkAAAAAAFbpvQtPFRtJWklzZr3o+q6CudNSWZZTqyg8j5jpDBToVJUpq0o9zW5rimacouLszpwkpK6JdCP8eH9X+LLsK/40fzgzj9Iop7Nq9y/3I687Z8nAAAAAAAAAAAAAAAAAAAAAAAAKfT69z+r7HL2ks4vv+h77oTL4a8f8v/0VuHoyqSjCKvKTSS6WcxJt2R7mUlFXZ9H0NouOGp6qzk7Oct8n6LcjpU6agrHGrVXUldm+WFQAAAAAAAAAAOW5e6OU6Krpc6k0n0wk7eDafayivG6vyNrCztLd5nG6DX48P6v8WYYRXrR/OBp9I5buzavh/uR152z5QAAAAAAAAAAAAAAAAAAAAAAAAVeno8yL/mt3p+hztpL4IvtPZ9CqlsTVhzin5O31LDkNgk3Os/h5kehtXk+5pdrNPCxzcj2+NnZKHidgbhzjCrWjDOUox+pqPmQ2lqSot6I8o4iE/dlCX0yUvIJp6Bxa1RISQAAAY1KiiryaS4tpLvZF7EpN6GFLFU5u0Zwk+EZRk/BkKSejJcJLVEpkYmppejr0KsPmp1F26rt4mM1eLRnTdpJ9p815ORvWvwjJ+S+5VgVerfsNDpZPd2e485JfX6HUnYPmQAAAAAAAAAAAAAAAAAAAAAAABo6Yjek+hxfjb7mpjlei+yx6PopV3NpRX7lJel/oXvIuFsNf5pzfkvsaOG+Q+gYx/wATwPOVGmnh4qEP3k1e+3Vjsv1vO3UxXq7mS1GGoKo7y0Ry2C0RiMU3USbvtnOVk31vN9hqxpTqZo351qdL4fRGWO0HiMN+I1kvjhK+r5NdYlRnDP2IhXp1Ph9GdFyV05KtelUd5xV4y+aK236VftNmhWcvhepp4rDqHxR0OjNk0ys5QaV/ZqWsknOTtBPZfe30L7oqq1NyNy+hR6yVuBxVDCYjGzcudNrbKTtGPRwXUjRUZ1HfU6Up06KtoTYzk1iKS1tWMks3qO7XTZpPuMpUJxV7GMMVTll7lnyV09JzVCq3JSyhJ5tP5W96e79WtoVnfdkUYrDpLfj4nVYr3J/TLyZtvQ0Fqj5vyVp5zl0RXfdvyRGzo6yOF0zrWhSpc235WX1Z0J0zwQAAAAAAAAAAAAAAAAAAAAAAABHiKDqQlFK7cZeCKMTbqpJ8jr7CjUe0KTpq9nd9i0b8mW3I/wD7SHXU/wAmc7Dfyz6Xi/5rNjSuhKWJcZT1k45Xi7XW2zy6+8yqUoz1MKVedNWR7pLSlDBU4upJQjlGEUnJuy2RSzduJdCDeUSic0s5M90TpehjIOVKSmllJNNNX3Si9zz6GTKDjkyITUs0YaN0FRw83UgpXaaV3dRT3Lu33KIUYwd0bNTETqKzLGE7lpS1Y1NK6Lp4mKjPW5runF2a4lc6amrMspVZU3eJ7CNLCUc2oU6au234t722zOELLdiYVKjk3KRp6I5T4bFT9nSqNzzaUoyg2ltcbrPq2lkqco5sqjUjLJElLQFGNb26Uta7klfmKT3pW6eNjXVGKlvG08RNw3Gb+Lf4c/pn5MsehTHVHDcncK4YeM7ZVHJ93N/+blmAa6u3E8p0vp1f1MajXwWsn25t3/OBZG8eQAAAAAAAAAAAAAAAAAAAAAAAALLRkLRcuL8F+maGLl8SR7roth1HDyrPWTt4L+7Zt6EwvsqWpuU6rX0ubcfBlFGO7Gx6WvLenfsRvlpScT/1G0HWxHsqtKMqns1KMoxzkrtNSS37LO2eS7L6M0rplFaDdmjz/pzoOtQdSrVjKmpxjGMZZSdndya3cFfPN9qtNOyRFGDV2ztKsrJlBsxV2Y4b3e8gynqSkmBR8s9GVMVhJU6ec04SUb21tV5xv4rpSLKUlGV2V1YuUbI4rkbyaxKxdOrOlOlClJybmtW+TWrFPN3vt2WuX1Kkd2yKKdOW9dn1E1DbIsXBypzitrjNLrcWkQ9CY6op8Lg9TDQpO1404p/Uln4lVB7kolO1qCxOFqx7G13rNGgdg+VggAAAAAAAAAAAAAAAAAAAAAAAs9GyvC3BvxzOfi1adz33ReqpYRw4xk/Wz+/kWtD3SuGh3p6khmYAAAEGLlZLrIZZTWZjQxEUrMXJlBtksK0W7JgwcGs2SEmIAAAYBW1pWi3wTKaavNIxx1ZUcNUqPhF+2XqUh2D5Qj0gAAAAAAAAAAAAAAAAAAAAAAAlw1dwd9z2orq0lUjY6Wy9pTwNbfSvF5SXNdnauHkX+BrKcbrc2uH62mluShkz3+GxtHFw6yi7rTlZ8jYBsAAAHkopqzBKdjX/AGNcWRYs61ktOio7AYSk3qSEmIAABjUmopt7Em+4WbyRhUqRpxc5uySu+5HP4zF6/NWzzNihQ3PilqeM23ttYxdTR+Ti3/Vyy4Jdud+Vs9U2TzgAAAAAAAAAAAAAAAAAAAAAAAAALTQdazlDjmutZP7dxr4iOSZ6joziN2c6D45rw19LeRcGsexAAAAAAABjrq+rdXte187cbEXJs7XMiSAAaWl6urTa3yy7N/gW0Y3kcTb+J6rCOPGWX39PcoDcPAgAAAAAAAAAAAAAAAAAAAAAAAAAAGVKo4yUltTuQ1dWZdQrSoVY1Yaxd/zvWR01CspxUlsf6saEouLsz6XhcTDE0o1YaP07PAkINgwrKVua4p/zJyXg0Q78CY24mrOpXXw0X/XKPmjG8+wtSpPi/IjdXEP4cPHrlJ+RF59hO7S7fI8jRqTdp1n1UoqK/M8xuyerJvGOkfP7G7h8NGmrRVr7Xtb6282ZqKWhTKcpakpJiGA3bU53SWJ9pO692OS+77fQ3aUN2J872vj/ANXiLx+WOS+r8fZI1Sw5QAAAAAAAAAAAAAAAAAAAAAAAAAAAANrAYx0nxi9q+66TCpT30dTZe054KfOL1X1Xb7+Vr+jVU1rRd0aUouLsz3+HxFPEQVSk7p/ng+wzILg1cAj9hH5UQZb8uZmlYkxuegBsENpK7KXSWkdbmQ93e+PQug2qVK2bPGbY20q6dCg/h4vn2Ls9+7WtLzzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMPXlTd4u3k+tESipKzNnC4uthZ79J258n3r87C+wWNVRLc+HoaM1uy3T6Js7EvF4aNfdte/o7G0Ym4AAAR1qyirvu3kXJs2m1wKDF46VXojuS+/E34U1A+cY/a1bG5PKHBL6836dhrGZzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFGm4xj0q67TnYj+Yz6h0fhubOprvfm2/qblLGNZPPzK1I6kqKehN+3R4S8Cd9FXUSI6mO4Lv9CHMzjQ5mrnJ8WzHVlzSUewrJRs2uDa7sjr3vmfGZ0+rk4cnbyyPAYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGVKm5SUVtbsG7K5bQoyrVI0o6t2/O7U6Wph04qPBK3RY5ssz6pQSopRjolbwRW1Kbi7Mqasb8ZKSujAgyPUgQWGEw+rm9vkWxjY1atTeyWhUaWo6tRvdLNffx8zfoyvE+c7dwzo4uUuEs19fXPxNMsOMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXWicFqc+SzexcF6mrWqXyR7XYWynQXX1V8T0XJfd+i8SyKD0hjOCeTSZFiU2tCF4OPT3kbqLOukS06MY7F6kpJGEpylqZkmJrY/CqrG29Zp9PoZ057ruc7aez44yjuaSWafb9nx8+Bz1SDi7NWaN5NNXR87q0p0puFRWa4GIKwAAAAAAAAAAAAAAAAAAAAAAAAAACKvXjTWtOUYrjJqPmCynSnUe7BNvsRTYrlVRjlDWm+KWrHvefgDrUNh155zaivN+n3NOlyorRqKpH2dl8LWsn1vbfpViJR3lZnewWzaGFkppXlzf0XD37Tr9FctqFWyq3oy6edDsktnakasqElpmduNeL1yOkoVo1FrQlGUXvi1Jd6KWralqd9DMEgAABu2b2AFHpPlXhqF1rqpL5adp98vdXeWRpSZXKrFHGaV5XVq004xhCMdkbKbf1SefdY2qdNQOZjcPSxatUjpo+K8fpoMPysp7KkWumPOXdt8zM87X2DNZ0pJ9jyf29i6wekKVb93OMuhPndsXmgcevha1D+ZFr289DZBrgAAAAAAAAAAAAAAAAAAAAGrj9IU6EdapK3BbZPqW8GzhsJVxEt2mr+y7zldIcqqk8qSVNcXaU/RePWD0eG2HRhnVe8/Jfd/mRQ1qspvWlKUnxk3J97B2YQjBbsEkuwwBkZQm1sAJ44niu4A2MPi3B3hOUHxjJwfeg1fUlNrQtqHKfFw2V5v6lGp4yTMHSg+Bmqs1xNlcssZ/Ej/AG6foR1MORPXT5kNXlZjJf8Ana6oU4+KjclUociOtnzKvGaRnU/eVZz+qbl4NmSiloYuTeppyxC3Z+BJiQzqtgEYB6nbPgBqW2A5R16WTl7SPCeb7Jbe+4OZidkYetmluvmvtp7HVaK05SxGSerP5ZbX9L+LzB5vGbNrYbN5x5r68vbtLQHPAAAAAAAAAAAAAAAABo6Y0isPSc3m9kVxk/tvBuYLCSxVVQWnF8kfPsViZVZuc23J/qyW5dAPb0aMKMFCCskQgsAAAAAAAAAPdZ8WALgHgAAAAAAAAPU7Zrd2ANXyZ23JjTLrp05v8SKvf5o8etbweR2ts5YeXWU/lfo/tyL4HGAAAAAAAAAAAAAAAOM5a1260IboRv2yefhFA9XsGko0ZT4t+i/7ZzoO4AAAAAAAAAAAAAAAAAAAAAAAAbuhq7p16cv5op9Uua/Bg1cdSVXDzi+Xtmj6QDwQAAAAAAAP/9k="
								alt=""
							/>
						</div>
					</div>
					<div className="head2">
						<div className="name1">
							<h1>jaan_Tusher</h1>
							<button>Edit Profile</button>
							<div>
								<img src={Gear} alt="option" onClick={handleClickOpen} />
								<Dialogg open={open} onClose={handleClose}>
									<DialogInner />
								</Dialogg>
							</div>
						</div>
						<div className="name2">
							<div className="post1">
								<span>1</span> post
							</div>
							<div className="post2">
								<span>104</span> followers
							</div>
							<div className="post3">
								<span>158</span> following
							</div>
						</div>
						<div className="name3">Jane Alam Tusher</div>
					</div>
				</Head>
				<ProfileInner />
			</Container>
		</div>
	);
}

const Inner = styled.div`
	font-family: 'Hind Siliguri', sans-serif;
	max-width: 800px;
	ul {
		max-width: 50vw;
		min-width: 40vw;
	}
	li {
		text-align: center;
		font-size: 15px;
		padding: 12px;
		border-bottom: 1px solid rgba(221, 221, 221, 0.493);
		cursor: pointer;

		:last-child {
			border-bottom: none;
		}
		:active {
			background: #ddd;
		}
	}
`;

function DialogInner() {
	return (
		<Inner>
			<ul>
				<li>Change Password</li>
				<li>NameTag</li>
				<li>Notification</li>
				<li>Log out</li>
				<li>Cencel</li>
			</ul>
		</Inner>
	);
}

export default Profile;
