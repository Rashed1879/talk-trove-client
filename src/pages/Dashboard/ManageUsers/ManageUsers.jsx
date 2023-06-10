import { ImUserTie } from 'react-icons/im';
import { GrUserAdmin } from 'react-icons/gr';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
	const { data: users = [], refetch } = useQuery(['users'], async () => {
		const res = await fetch('http://localhost:5000/users');
		return res.json();
	});

	return (
		<div>
			<h2 className="text-center mb-5">
				Manage ALL Users: {users.length}
			</h2>
			<div className="overflow-x-auto">
				<table className="table border-2 border-black">
					{/* head */}
					<thead className="bg-base-200 text-black">
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user._id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src={user.image}
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">
												{user.name}
											</div>
										</div>
									</div>
								</td>
								<td>
									<div>{user.email}</div>
								</td>
								<td>{user.role}</td>
								<th>
									<button className="btn btn-sm mr-2">
										<ImUserTie />
									</button>
									<button className="btn btn-sm">
										<GrUserAdmin />
									</button>
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageUsers;
