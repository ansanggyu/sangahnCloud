import BasicLayout from "../../components/layouts/BasicLayout.tsx";

function IPManagementPage() {
    return (
        <BasicLayout>
            <h1>허용된 IP 관리</h1>
            <p>파일 접근을 허용할 IP를 설정할 수 있습니다.</p>
        </BasicLayout>
    );
}

export default IPManagementPage;
