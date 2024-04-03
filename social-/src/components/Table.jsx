function Table(props){
    return props.data.map((data) => {
        return <Post description={data.description} content={data.content}/>

    })
    return (
        <Table>
            <tr>
                <th>Link name</th>
                <th>Link URL</th>
            </tr>
        </Table>
    )
}
export default Table