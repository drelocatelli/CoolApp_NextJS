import 'isomorphic-fetch';
import Header from '../src/components/Header';
import PageView from '../src/components/PageView';

const estatico = (props) => (
    <>
        <Header />
        <PageView title='Repositories'>
            {props.repositories.map(repo => (
                <div key={repo.id}>{repo.name}</div>
            ))}
        </PageView>
    </>
);

estatico.getInitialProps = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
    const repositories = await response.json();

    return { repositories };
}

export default estatico;